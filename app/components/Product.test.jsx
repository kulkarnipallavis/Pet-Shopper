import React from 'react'
import chai, {expect} from 'chai'                                                   
chai.use(require('chai-enzyme')())
import {shallow} from 'enzyme'
import {spy} from 'sinon'
chai.use(require('sinon-chai'))
import {createStore} from 'redux'
import ProductContainer, {Product} from './Product'

describe('<Product/>', () => {
  const product = {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99,
        description : 'first product description'    
	}

	const props = {
		products: {products: [product], selectedProduct: {product}},
		getProductDispatch: () => {},
		route: {
			path: ''
			},
		routeParams: {id: 1}
	}

	const state = {
	  products:[product],
	  selectedProduct: {product}
	}
  let root
  beforeEach('render the root', () =>
    root = shallow(<Product {...props}/>)
  )  

  it('renders the product', () => {
	 expect(root.find('#product-name')).to.have.length(1)
	})

  it('renders the product price', () => {
	 	expect(root.find('#product-price')).to.have.length(1);
	 })

})


describe('<Product /> connection', () => {
	

	const product = {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99,
        description : 'first product description'    
	}

	const props = {
		products: {products: [product], selectedProduct: {product}},
		getProductDispatch: () => {},
		route: {
			path: ''
			},
		routeParams: {id: 1}
	}


	const state = {
	  products: {products: [product], selectedProduct: {product}}
	}
	
	let root, store, dispatch
	  beforeEach('create store and render the root', () => {
	    store = createStore(state => state, state)
	    // dispatch = spy(store, 'dispatch')
	   	root = shallow(<ProductContainer store={store} />)
	  })

	 
	 it('gets prop.product from state.products', () => {
	    expect(root.find(Product)).to.have.prop('products').eql(state.products)
	  })
})