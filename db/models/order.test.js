'use strict'

const db = require('APP/db')
const Order = require('./order')
const {expect} = require('chai')

describe('Order', () => {
  before('wait for the db', () => db.didSync)

  describe('properties', () => {
    let testOrder

    beforeEach(function () {
      testOrder = Order.build({products: [1, 3], status : 'active'})
    })
    
    it('contains correct number of products', () =>{
      expect(testOrder.products).to.have.length(2);
    })

    it('has correct order status', () =>{
      expect(testOrder.status).to.equal('active');
    })
  })
})
