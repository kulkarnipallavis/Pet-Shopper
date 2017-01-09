'use strict'

const db = require('APP/db')
const Product = require('./product')
const {expect} = require('chai')

describe('Product', () => {
  before('wait for the db', () => db.didSync)

  describe('authenticate(plaintext: String) ~> Boolean', () => {
    it('finds all products with matching tags', () =>
      //TODO
      true
      )

    
  })
})