'use strict'

const db = require('APP/db')
const Category = require('./category')
const {expect} = require('chai')

describe('Category', () => {
  before('wait for the db', () => db.didSync)

  describe('properties', () => {
    const clothing = {
      name: 'clothing'
    }
    it('has the correct properties', () =>
      {
        Category.create(clothing)
        .then(category => {
          expect(category).to.deep.equal(clothing);
        })
      }
      )


  })
})