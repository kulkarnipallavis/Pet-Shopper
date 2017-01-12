'use strict'

const db = require('APP/db')
const Order = db.model('order')

const router = require('express').Router()

//get current active order
router.get('/', (req, res, next) => {
	//User Instance find active assoc. order
	Order.findOne({
		where: {
			id: req.user.id,
			status: 'active'
		}
	})
	.then(order => {
		
	})
	//Order find assoc. products
	// send all products
})
//create new order

//modify existing active order

//delete active order