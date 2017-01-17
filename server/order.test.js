const request = require('supertest-as-promised')
const {expect} = require('chai')
const db = require('APP/db')
const Order = require('APP/db/models/order')
const app = require('./start')


describe('api/orders', () => {

	describe('req.session.order initialized with correct properties', () => {
		
		const agent = request.agent(app)
		
		it('intializes with correct fields', () => {
			agent.get('/api/orders')
			.then(res => {
				expect(res.body.userId).to.equal(null);
			})
		})
	})

})
