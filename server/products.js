'use strict'

const db = require('APP/db')
const Product = db.model('products')

const router = require('express').Router()

// Custom routes go here.

// get all products or query for specific ones
router.get('/', (req, res, next) => {
	if (!req.query.tags) {
	const nameQuery = (req.query.name)  ? {where: {name: {like: `%${req.query.name}%`}}} : {};
	Product.findAll(nameQuery)
	.then(products => {
		res.send(products);
	})
	.catch(next);
	}
	else {
		Product.findByTag(req.query.tags)
		.then(products => {
			res.send(products);
		})
		.catch(next);
	}
})

router.get('/:id', (req, res, next) => {
	Product.findById(req.params.id)
	.then(product => {
		res.send(product);
	})
	.catch(next);
})


module.exports = router


