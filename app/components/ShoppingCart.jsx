import React, {Component} from 'react';
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'
import {Link} from 'react-router';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear'

import {deleteFromOrder} from '../reducers/cart';

const mapStateToProps = (state) => {
  return { products : state.cart.products }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromOrderDispatch: (product) => {
      dispatch(deleteFromOrder(product))
    }
  }
}

export const ShoppingCart = (props) => {

  const products = props.products;
  const deleteProduct = props.deleteFromOrderDispatch;

  const convertPrice = (price) => {
    price = price.toString()
    price = price.split("")
    price.splice(-2, 0, ".")
    price = "$" + price.join("")
    return price;
  };

  return (
    <div style= {styles.cartContainer}>
      <div style={ styles.cart }>
        <Paper zDepth={1}>
          <Subheader style={ styles.subheadings }>Cart</Subheader>
          <List>
            {products && products.map((product, index) => (
            <ListItem
              key={index}
              primaryText={<div>
                <div style={styles.itemName}>{product.name}</div>
                <div style={styles.itemPrice}>{convertPrice(product.price)}</div>
              </div>}
              rightIcon={<ClearIcon
              onClick={() => deleteProduct(product)}/>}
              />
            ))}
          </List>
        </Paper>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)


const styles = {
  heading : {
    fontFamily : "Roboto, sans-serif",
    textDecoration: "none",
    color: "#808080",
    display: "block",
    paddingBottom: "15px"
  },
  subheadings: {
    color: "#FA8072"
  },
  cartContainer: {
    paddingTop: "2%",
    float: "left",
    width: "60%"
  },
  cart : {
    width: "70%",
    margin: "auto",
  },
  order: {
    paddingTop: "10%",
    float: "left",
    width: "30%"
  },
  itemName: {
    float: "left"
  },
  itemPrice: {
    float: "right"
  },
}
