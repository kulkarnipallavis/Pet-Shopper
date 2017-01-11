'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('properties', () => {
    const dogSweater = {
      name: 'dog sweater',
      imageURL: 'http://www.google.com',
      price: 4.99,
      description: 'warm and cozy',
      inventory: 8,
      tags: ['dog', 'sweater', 'clothes']
    }
    it('has the correct properties', () =>
      {
        Product.create(dogSweater)
        .then(product => {
          expect(product).to.deep.equal(dogSweater);
        })
      }
      )
  })
})