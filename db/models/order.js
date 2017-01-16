const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')

const Order = db.define('orders', {
	products: {
		type: Sequelize.ARRAY(Sequelize.INTEGER)
	},
	status: {
		type: Sequelize.ENUM,
		values: ['active', 'complete']
	},
	total: {
		type: Sequelize.DECIMAL(10, 2)
	},
	totalItems: {
		type: Sequelize.INTEGER
	}
}, {
	instanceMethods: {
		fetchProducts: function() {
			return this.products.map(el => Product.findById(el))
		}
	}
})


module.exports = Order