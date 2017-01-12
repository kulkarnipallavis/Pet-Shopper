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

  describe('Instance methods', () => {

    it('finds all products with similar tag', () => {
      Product.findById(1)
      .then(function(firstProduct){
        return firstProduct.findSimilar();
      })
      .then(function(foundProducts){
        expect(foundProducts).to.have.length(1)
        expect(foundProducts[0].name).to.equal('cat sweater')
      })
    })
  })
})

