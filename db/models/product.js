'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Product = db.define('products', {
	name: Sequelize.STRING,
	imageURL: Sequelize.STRING,
	price: Sequelize.DECIMAL(10, 2),
	description: Sequelize.TEXT,
	inventory: Sequelize.INTEGER,
	tags: Sequelize.ARRAY(Sequelize.STRING)
}, {
	classMethods: {
		findByTag: function(tag) {
			return this.findAll({
				where: {
					tags: {
						$contains: [tag]
					}
				}
			})
		},
		findAllById: function(arrayOfIds) {
			return arrayOfIds.map(id => {
				return this.findById(id)
			})
		}
	},
	instanceMethods: {
		findSimilar: function() {
			return Product.findAll({
				where: {
					id: {
						$ne: this.id
					},
					tags: {
						$overlap: this.tags
					}
				}
			})
		}
	}
})

module.exports = Product