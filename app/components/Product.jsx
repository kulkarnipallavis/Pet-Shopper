import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import NavBar from './NavBar';
import {Link} from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import {addToOrder} from '../reducers/cart';

function mapStateToProps(state) {
  return {
    selectedProduct: state.products.selectedProduct,
    cartSize: state.cart.products.length,
    lastAdded: state.cart.products[state.cart.products.length - 1]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addOrderToCart: function(product) {
      dispatch(addToOrder(product));
    }
  }
}

export const Product = (props) => {
  const product = props.selectedProduct;

  const convertPrice = (price) => {
    if (!price) return null;
    price = price.toString()
    price = price.split("")
    price.splice(-2, 0, ".")
    price = "$" + price.join("")
    return price;
  };
  let added = false;

  console.log(props.lastAdded)
  console.log(props.selectedProduct)
  if (props.lastAdded) added = (product.id === props.lastAdded.id);

  return (
    <div>
    <NavBar />
     <div style={styles.root} >
        <Paper style={styles.prodImageContainer} zDepth={2} >
           <img src={product.imageURL } style={styles.prodImage}/>
        </Paper>

        <Paper style={styles.prodDescriptionContainer} zDepth={2} >
            <div style={{display : 'block'}}>
              <div style={styles.name}>
                <h2>{product.name}</h2>
              </div>
              <div style={styles.stockStatus}>
                <h4>In Stock.</h4>
              </div>
              <div style={styles.description}>
                {product.description}
              </div>
              <div style={styles.tags}>
                {"Tags: "}
                {product.tags && (
                  product.tags.map((tag, i) => (
                    <div key={tag} style={styles.tag}>
                    <Link to={`/products?tags=${tag}`}>{tag}</Link>
                    {(i < product.tags.length - 1)
                    ? ", "
                    : null
                    }
                    </div>
                    ))
                )
                }
              </div>
              <div style={styles.price}>
                <h4>Price: {convertPrice(product.price)}</h4>
              </div>
            </div>
            <div style={styles.buttonContainer}>
            <RaisedButton label="Add to Cart" labelColor='white' onClick={() => props.addOrderToCart(product)} style={styles.button} backgroundColor="#FA8072"/>
            </div>
        </Paper>
    </div>
    { (added)
    ? (<Paper style={styles.cart} zDepth={2} >
        <div>Added 1 {product.name} to the cart.  You now have {props.cartSize} items in your cart.</div>
        <br/>
        <RaisedButton label="Browse Products" labelColor='white'style={styles.button} backgroundColor="darkgrey" href="/products"/>
        <RaisedButton label="View Cart" labelColor='white'style={styles.button} backgroundColor="grey" href="/cart"/>
      </Paper>)
    : null
    }
  </div>)
}

export default connect (mapStateToProps, mapDispatchToProps) (Product)

const styles = {
  root: {
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  cart: {
    width: '70%',
    textAlign:'center',
    margin: 'auto',
    padding: '20px'
  },
  message: {
    margin : '30px'
  },
  prodImageContainer: {
    maxHeight: '400px',
    width: '40%',
    margin : '20px'
  },
  prodImage: {
    maxWidth: '100%',
    height: '100%',
    display:'block',
    margin:'auto'
  },
  prodDescriptionContainer: {
    height: 'auto',
    width: '40%',
    margin : '20px',
    display : 'block',
    position: 'relative'
  },
  name:{
    textAlign:'center'
  },
  stockStatus:{
    textAlign:'center',
    color:'green'
  },
  description: {
    textAlign:'left',
    paddingLeft: '10px',
    paddingRight: '10px'
  },
  tags:{
    textAlign:'left',
    marginTop: '15px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  tag:{
    marginLeft: '5px',
    display: 'inline-block'
  },
  price: {
    textAlign:'center'
  },
  buttonContainer:{
    display : 'block',
    bottom: '0', position:
    'absolute',
    right:'0'
  },
  button:{
    margin: '10px'
  }
}

