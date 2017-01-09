'use strict'

const db = require('APP/db')

const customProductRoutes = require('express').Router() 

// Custom routes go here.
customProductRoutes.get('/clothing', (req, res, next) => {
	Products.findAll({
		where: {
			category: 'clothing'
		}
	})
	.then(products => {
		res.send(products);
	})
	.catch(next);
})

customProductRoutes.get('/toys', (req, res, next) => {
	Products.findAll({
		where: {
			category: 'toys'
		}
	})
	.then(products => {
		res.send(products);
	})
	.catch(next);
})

customProductRoutes.get('/food', (req, res, next) => {
	Products.findAll({
		where: {
			category: 'food'
		}
	})
	.then(products => {
		res.send(products);
	})
	.catch(next);
})

module.exports = customProductRoutes


