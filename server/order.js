'use strict'

const db = require('APP/db');
const Order = db.model('orders');
const Product = db.model('products');
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
	const productIds = req.session.order.products;

	Promise.all(Product.findAllById(productIds))
	.then(products => {
		console.log(products)
		res.send(products)
	})

});

// add single product to cart
// expects post data = {"product": {"id": 4}, "total": "20.00"}
router.post('/', (req, res, next) => {
	req.session.order.products = req.session.order.products.concat([req.body.product.id]);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length
	syncDbOrder(req.user, req.session.order)
	.then(() => {
		const productIds = req.session.order.products;
		return Product.findAllById(productIds)
	})
	.then((productsArray) => {
		res.send(productsArray)
	})
	.catch(next);
});

// remove single product from cart
router.post('/delete', (req, res, next) => {
	const index = req.session.order.products.indexOf(req.body.product.id);
	req.session.order.products.splice(index, 1);
	req.session.order.total = req.body.total;
	req.session.order.totalItems = req.session.order.products.length
	syncDbOrder(req.user, req.session.order)
	.then(() => {
		const productIds = req.session.order.products;
		return Product.findAllById(productIds)
	})
	.then((products) => {
		res.send(products)
	})
	.catch(next);
});

module.exports = router;