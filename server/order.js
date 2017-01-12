'use strict'

const db = require('APP/db')
const Order = db.model('order')

const router = require('express').Router()

//get current active order and place on req.activeOrder
router.param('activeOrder', function(req, res, next) {
	Order.findOne({
		where: {
			id: req.user.id,
			status: 'active'
		}
	})
	.then(order => {
		if (!order) next();
		req.activeOrder = order;
		next ();
		return null;
	})
	.catch(next);
})


router.get('/', (req, res, next) => {
	//Order instanceMethod that fetches products
	req.activeOrder.fetchProducts()
	.then(products => {
		res.send(products)
	})
	.catch(next);
})

//create or modify an order
router.post('/', (req, res, next) => {
	if (req.user) {
		if(req.activeOrder) {
			req.activeOrder.Update({
				products: req.body.products
			})
		.then(updatedOrder => {
			return updatedOrder.fetchProducts()
		})
		.then(products => res.status(204).send(products))
		.catch()
		} else {
		Order.Create(req.body)
		.then(order => {
			return order.fetchProducts()
		})
		.then(products => res.status(201).send(products))
		.catch()
		}
	}

	req.session.order = {total : 1}
})

//delete active order?
// router.delete('/', (req, res, next) => {
// 	req.activeOrder.Delete()
// 	.then(()=> res.status(200).send())
// } )




