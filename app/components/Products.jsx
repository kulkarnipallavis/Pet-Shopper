import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts} from '../reducers/products';

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductsDispatch: function(specification) {
      dispatch(getProducts(specification));
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (
  class Products extends Component {
  constructor(props){
      super();
      this.state = {
      }

      console.log(props);
      // if (props.route.path === '/products/categories/:id') props.getProductsDispatch({category_id: props.routeParams.id});
      // props.getProductsDispatch();
    }


  render() {
    //if (!props.products.products.length) { return null }
    //const products = props.products.products;
    const products = [
      {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99
      },
      {
        id: 2,
        name: '2nd',
        imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
        price: 53.99
      },
      {
        id: 3,
        name: '3rd',
        imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
        price: 15.99
      },
      {
        id: 3,
        name: 'fourth',
        imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-9wAnahSjAL82jJl7uKPxA8TL4Zw_Q1Tb1d4ZsT4DWl-CnIQp',
        price: 56.99
      }
    ]
    return (
      <div>
        {products.map(product => (
          <div key={product.id}>
            <div>{product.name}</div>
            <img src={product.imageURL}></img>
            <div>{product.price}</div>
          </div>
        ))
        }
      </div>
    )
  }
}
)