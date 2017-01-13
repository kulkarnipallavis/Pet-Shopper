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
router.use(function(req, res, next) {
	if (req.user && req.session.order.products.length === 0) {
		Order.findOne({
			where: {
				user_id: req.user.id,
				status: 'active'
			}
		})
		.then(order => {
			if (order) {
				req.activeOrder = order;
				next();
				return null;
			} else {
				req.activeOrder = req.session.order;
				next();
			}
		})
		.catch(console.log("no order found"));
	} else {
		req.activeOrder = req.session.order;
		next();
	}
})


router.get('/', (req, res, next) => {
	res.send(req.activeOrder);
	// if (req.user && req.session.order.products.length === 0 && req.activeOrder) {
	// 	req.session.order.products = req.activeOrder.products;
	// 	req.session.order.userId = req.activeOrder.user_id;
	// 	req.session.order.totalItems = req.activeOrder.totalItems;
	// 	req.session.order.total = req.activeOrder.total;

	// 	res.send(req.session.order);

	// }
	// else {
	// 	res.send(req.session.order);
	// }
})

//create or modify an order
router.post('/', (req, res, next) => {
	req.session.order.products = req.session.order.products.concat([req.body.product.id]);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length;
	if (req.user) {
		req.session.order.userId = req.user.id;
		if (req.activeOrder) {
			req.activeOrder.update({
				products: req.activeOrder.products.concat([req.body.product.id]),
				total: req.body.total,
				totalItems: req.session.order.totalItems
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

router.post('/delete', (req, res, next) => {
	const index = req.session.order.products.indexOf(req.body.product.id);
	req.session.order.products.splice(index, 1);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length;

	if (req.activeOrder) {
		req.activeOrder.update({
			products: req.session.products,
			total: req.body.total,
			totalItems: req.session.order.totalItems
		})
		.then(() => {})
		.catch();
	}
	res.status(204).send(req.session.order);

})


module.exports = router;






