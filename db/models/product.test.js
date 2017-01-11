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

  // describe('methods', () => {
  //   const dogSweater = {
  //     name: 'dog sweater',
  //     imageURL: 'http://www.google.com',
  //     price: 4.99,
  //     description: 'warm and cozy',
  //     inventory: 8,
  //     tags: ['dog', 'sweater', 'clothes']
  //   }
  //   const catSweater = {
  //     name: 'cat sweater',
  //     imageURL: 'http://www.google.com',
  //     price: 7.99,
  //     description: 'warm and cozy',
  //     inventory: 8,
  //     tags: ['cat', 'sweater', 'clothes']
  //   }
  //   const catFood = {
  //     name: 'cat food',
  //     imageURL: 'http://www.google.com',
  //     price: 8.99,
  //     description: 'nom nom',
  //     inventory: 8,
  //     tags: ['cat', 'food']
  //   }
  //   before('seed the database', Product.bulkCreate([dogSweater, catSweater, catFood]).then(() => {}));
  //   it('finds by tag', () =>
  //     {
  //       Product.findByTag('sweater')
  //       .then(products => {
  //         expect(products).to.have.length(2);
  //         expect(products[0].name).to.equal('dog sweater');
  //         expect(products[1].name).to.equal('cat sweater');
  //       })
  //     }
  //     )
  // })
})