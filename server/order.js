'use strict'

const db = require('APP/db')
const Order = db.model('order')

const router = require('express').Router()

//get current active order
app.param('activeOrder', function(req, res, next, id) {
	Order.findOne({
		where: {
			id: req.user.id,
			status: 'active'
		}
	})
	.then(order => {
		if (!order) throw error;
		req.activeOrder = order;
		next ();
		return null;
	})
	.catch(next);
})

router.get('/', (req, res, next) => {
	//Order find assoc. products
	req.activeOrder.fetchProducts()
	// send all products
	.then(products => {
		res.send(products)
	})
	.catch(next);
})

//create or modify an order
router.post('/', (req, res, next) => {
	if(req.activeOrder) {
		Order.findById(req.activeOrder.id)
		.then(order => order.Update({
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
	
})

//delete active order