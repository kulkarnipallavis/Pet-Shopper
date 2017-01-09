'use strict'

const bcrypt = require('bcrypt')
const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
	name: Sequelize.STRING,
	imageURL: Sequelize.STRING,
	price: Sequelize.DECIMAL(10,2),
	description: Sequelize.TEXT,
	inventory: Sequelize.INTEGER,
	tags: Sequelize.ARRAY(Sequelize.STRING),
	category: Sequelize.STRING  
})

module.exports = Product