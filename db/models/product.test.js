'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {

  before('wait for the db', () => db.didSync)

  describe('Product properties', () => {

    let dogSweater

    beforeEach(function () {
      dogSweater = Product.build({
      name: 'dog sweater',
      imageURL: 'http://www.google.com',
      price: 4.99,
      description: 'warm and cozy',
      inventory: 8,
      tags: ['dog', 'sweater', 'clothes']
      })
    })
      
    it('has the correct name', () => {
      expect(dogSweater.name).to.equal('dog sweater');
    })
    it('has the correct url', () => {
      expect(dogSweater.imageURL).to.equal('http://www.google.com');
    })
    it('has the correct price', () => {
      expect(dogSweater.price).to.equal(4.99);
    })
    it('has the correct number of tags', () => {
      expect(dogSweater.tags).to.have.length(3);
    })
  })

  describe('Class methods', () => {

    beforeEach(function () {
      Product.bulkCreate([
        {name: 'dog sweater', tags: ['dog', 'sweater', 'clothes']},
        {name: 'cat sweater', tags: ['cat', 'sweater', 'clothes']},
        {name: 'computer', tags: ['tech', 'keyboard']}
        ])
    })
     
  
    it('finds all products with a particular tag', () => {
      Product.findByTag('sweater')
      .then(products => {
        expect(products).to.have.length(2);
        expect(products[0].name).to.equal('dog sweater')
      })
    })
  })
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
