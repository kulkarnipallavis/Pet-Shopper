'use strict'

const db = require('APP/db')
const Category = require('./category')
const {expect} = require('chai')

describe('Category', () => {
  before('wait for the db', () => db.didSync)

  describe('properties', () => {
    let clothing

    beforeEach(function () {
      clothing = Category.build({name: 'clothing'})
    })
    
    it('has a name property', () =>{
      expect(clothing.name).to.equal("clothing");
    })
  })
})
