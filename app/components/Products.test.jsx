import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'
import ProductsContainer, {Products} from './Products'

describe('<Products/>', () => {
  const product = {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99,
        description : 'first product description'    
	}

	const props = {
		products: {products: [product], selectedProduct: {}},
		getProductsDispatch: () => {},
		setProductDispatch: () => {},
		route: {
			path: ''
			},
		routeParams: {id: 1}
	}

	const state = {
	  products:[product]
	}
  let root
  beforeEach('render the root', () =>
    root = shallow(<Products {...props}/>)
  )
  it('renders a gridlist', () => {
	 expect(root.find('#gridlist')).to.have.length(1)
	})
  it('renders the products', () => {
	 	// console.log("&&&&&&&&&&&&&",root);
	 	expect(root.find('#product-image')).to.have.length(1);
	 })

})


describe('<Products /> connection', () => {
	

	const product = {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99,
        description : 'first product description'    
	}

	const props = {
		products: {products: [product], selectedProduct: {}},
		getProductsDispatch: () => {},
		setProductDispatch: () => {},
		route: {
			path: ''
			},
		routeParams: {id: 1}
	}


	const state = {
	  products: {products: [product], selectedProduct: {}}
	}
	
	let root, store, dispatch
	  beforeEach('create store and render the root', () => {
	    store = createStore(state => state, state)
	    // dispatch = spy(store, 'dispatch')
	   	root = shallow(<ProductsContainer store={store} />)
	  })

	 
	 it('gets prop.products from state.products', () => {
	    expect(root.find(Products)).to.have.prop('products').eql(state.products)
	  })
})