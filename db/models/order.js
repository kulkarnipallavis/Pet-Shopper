const Sequelize = require('sequelize')
const db = require('APP/db')

const Order = db.define('orders', {
	products: {
		type: Sequelize.ARRAY(Sequelize.INTEGER)
	},
	status: {
		type: Sequelize.ENUM,
		values: ['active', 'pending', 'complete']
	}
})

module.exports = Order