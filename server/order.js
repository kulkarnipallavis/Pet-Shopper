'use strict'

const db = require('APP/db')
const Order = db.model('orders')

const router = require('express').Router()

router.use('/', (req, res, next) => {
	if (!req.session.order) req.session.order = {
		userId: null,
		products: [],
		status: 'active',
		total: 0.00,
		totalItems: 0
	};
	next();
})

//get current active order and place on req.activeOrder
router.param('activeOrder', function(req, res, next) {
	Order.findOne({
		where: {
			user_id: req.user.id,
			status: 'active'
		}
	})
	.then(order => {
		if (!order) next();
		req.activeOrder = order;
		next();
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
	req.session.order.products = [...req.session.order.products, req.body.product];
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length;
	if (req.user) {
		req.session.order.userId = req.user.id;
		if (req.activeOrder) {
			req.activeOrder.update({
				products: [...req.activeOrder.products, req.body.product.id],
				total: req.body.total
			})
		.then(() => {
			 res.status(204).send(req.session.order);
		})
		.catch()
		} else {
		Order.create(req.body)
		.then(() => {
			res.status(201).send(req.session.order);
		})
		.catch()
		}
	}
	else res.send(req.session.order);

})

module.exports = router;

//delete active order?
// router.delete('/', (req, res, next) => {
// 	req.activeOrder.Delete()
// 	.then(()=> res.status(200).send())
// } )




