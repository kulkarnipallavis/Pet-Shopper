'use strict'

const db = require('APP/db')
const Category = db.model('categories')

const router = require('express').Router()

// Custom routes go here.

//get all categories
router.get('/', (req, res, next) => {
	Category.findAll()
	.then(categories => {
		res.send(categories);
	})
	.catch(next);
})

//get all products in the specific category
router.get('/:id', (req, res, next) => {
	Category.findById(req.params.id)
	.then(category => {
		category.getProducts()
    .then(products => res.send(products));
	})
	.catch(next);
})


module.exports = router


