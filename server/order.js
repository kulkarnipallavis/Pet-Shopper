'use strict'

const db = require('APP/db');
const Order = db.model('orders');
const router = require('express').Router();

router.use('/', (req, res, next) => {
	if (!req.session.order) {
		req.session.order = {
			userId: null,
			products: [],
			status: 'active',
			total: 0.00,
			totalItems: 0
		};
	}
	next();
});

router.use(function(req, res, next) {
	// if user is logged in but has an empty session.order grab dbOrder & populate session.order
	if (req.user && req.session.order.products.length === 0) {
		Order.findOne({
			where: {
				user_id: req.user.id,
				status: 'active'
			}
		})
		.then(order => {
			if (order) {
				req.session.order = Object.assign({}, req.session.order, {
					userId: order.user_id,
					products: order.products,
					status: order.status,
					total: order.total,
					totalItems: order.totalItems
				});
			}
			next();
		})
		.catch(next);
	} else {
		next();
	}
});

// all following routes use session.order and
// call syncDbOrder to persist the order in the db for logged in users
function syncDbOrder(user, sessionOrder) {
	if (user) {
		return Order.findOrCreate({
			where: {
				user_id: user.id,
				status: 'active'
			}
		})
		.spread((order) => {
			return order.update(sessionOrder)
		})
		.catch(console.error)
	} else {
		return Promise.resolve("Success");
	}
}

router.get('/', (req, res, next) => {
	res.send(req.session.order);
});

// add single product to cart
// expects post data = {"product": {"id": 4}, "total": "20.00"}
router.post('/', (req, res, next) => {
	req.session.order.products = req.session.order.products.concat([req.body.product.id]);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length

	syncDbOrder(req.user, req.session.order)
	.then(() => res.send(req.session.order))
	.catch(next);
});

// remove single product from cart
router.post('/delete', (req, res, next) => {
	const index = req.session.order.products.indexOf(req.body.product.id);
	req.session.order.products.splice(index, 1);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length

	syncDbOrder(req.user, req.session.order)
	.then(() => res.send(req.session.order))
	.catch(next);
});

router.post('/done', (req, res, next) => {
	req.session.order.status = 'complete';

	syncDbOrder(req.user, req.session.order)
	.then(() => {
		req.session.order.products = [];
		req.session.order.total = 0.00;
		req.session.order.totalItems = 0;
		res.send(req.session.order);
	})
	.catch(next);


});

module.exports = router;