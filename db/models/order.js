const Sequelize = require('sequelize')
const db = require('APP/db')
const Product = require('./product')

const Order = db.define('orders', {
	products: {
		type: Sequelize.ARRAY(Sequelize.INTEGER)
	},
	status: {
		type: Sequelize.ENUM,
		values: ['active', 'pending', 'complete']
	}
}, {
	instanceMethods: {
		fetchProducts: function() {
			return this.products.Map(el => Product.findById(el))
		}
	}
})

module.exports = Order