import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getProducts, setSelectedProduct} from '../reducers/products';
import NavBar from './NavBar';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import Addbox from 'material-ui/svg-icons/content/add-box';

function mapStateToProps(state, ownProps) {
  return {
    products: state.products.allProducts,
    listProducts: state.products.listProducts,
    user: state.auth
    }
}

export const Products = (props) => {
  const products = props.listProducts;
  const user = props.user;
  return (
    <div>
      <NavBar />
      <div style={styles.root} id="gridlist">
        <GridList
          cellHeight={'auto'}
          style={styles.gridList}
          cols={3}
        >
          {products && products.map((product, index) => (
            <GridTile
              key={product.id}
              value={index}
            >
            <Link to={`/products/${product.id}`}>
              <Paper style={styles.product} zDepth={2} >
                <div>
                  <img id='product-image' src={product.imageURL } style={styles.prodImage}/>
                  <div id='product-name' style={styles.centerElements}>
                    {product.name}
                  </div>
                  <div style={styles.centerElements}>
                    ${product.price}
                  </div>
                </div>
              </Paper>
              </Link>
            </GridTile>
          ))}
          {user && user.isAdmin ?
            <GridTile>
              <Link to="/products/addproduct">
              <Paper style={styles.product} zDepth={2} >
                <div style={styles.addProduct} >
                  <Addbox color="#FA8072"/>
                  <h2 style={styles.addProductHeader} >Add Product</h2>
                </div>
              </Paper>
              </Link>
            </GridTile>
          : null}    
        </GridList>
    </div>
  </div>)
}

export default connect (mapStateToProps) (Products);

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '80%',
    height: '100%',
    overflowY: 'auto',
  },
  product: {
    maxWidth: '250px',
    height: '200px',
    width: 'auto',
    margin : '20px'
  },
  prodImage: {
    maxHeight: '150px',
    width: 'auto',
    display:'block',
    margin:'auto'
  },
  centerElements: {
    textAlign:'center'
  },
  addProduct: {
    textDecoration: 'none',
    color: '#808080',
  },
  addProductHeader: {
    textDecoration: 'none',
    textAlign: 'center',
    paddingTop: '15%'
  }
};

