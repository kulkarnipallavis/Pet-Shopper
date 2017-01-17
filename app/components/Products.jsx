import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getProducts, setSelectedProduct} from '../reducers/products';
import NavBar from './NavBar';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

function mapStateToProps(state, ownProps) {
  return {
    products: state.products.allProducts,
    listProducts: state.products.listProducts
    }
}

export const Products = (props) => {
  const products = props.listProducts;
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
};

