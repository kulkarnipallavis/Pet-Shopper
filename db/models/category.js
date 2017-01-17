'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Category = db.define('categories', {
	name: Sequelize.STRING,
	imageURL: Sequelize.STRING
})

module.exports = Category