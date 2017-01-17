import React, {Component} from 'react';
import {Link} from 'react-router';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear'
import RaisedButton from 'material-ui/RaisedButton';

import {deleteFromOrder} from '../reducers/cart';

const mapStateToProps = (state) => {
  return {products : state.cart.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromOrderDispatch: (product) => {
      dispatch(deleteFromOrder(product))
    }
  }
}

export const ShoppingCart = (props) => {

  const styles = {
    button : {
      margin: 20
    },
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
      paddingTop: "9%",
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
    }
  }

  let products = props.products;
  let deleteProduct = props.deleteFromOrderDispatch;
  
  return (
    <div style= {styles.cartContainer}>
      <div style={ styles.cart }>
        <Link to="/home" style={ styles.heading }>Back to Shopping</Link>
        <Paper zDepth={1}>
          <Subheader style={ styles.subheadings }>Cart</Subheader>
          <List>
          { products && products.map((product, index) => (
            <ListItem key={product.id} 
              primaryText={product.name} 
              rightIcon={<ClearIcon 
              onClick={deleteProduct(product)}/>}
              /> 
            ))}
          </List>
        </Paper>
      </div>
    </div>
  )
}

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)