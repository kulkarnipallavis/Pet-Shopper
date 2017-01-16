import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import RaisedButton from 'material-ui/RaisedButton';
import ShoppingCart from './ShoppingCart';

import {deleteFromOrder} from '../reducers/cart';


const mapStateToProps = (state) => {
  return {products : state.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromOrderDispatch: (product) => {
      dispatch(deleteFromOrder(product))
    }
  }
}

export class OrderComponent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product){
    this.props.deleteFromOrderDispatch(product);
  }

  render() { 

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
      order: {
        paddingTop: "10%",
        float: "left",
        width: "30%"
      }
    }


  return (
    <div style={ styles.order }>
      <Paper zDepth={1}>
        <Subheader style={ styles.subheadings }>Order Summary</Subheader>
        <List>
          <ListItem primaryText="Product 1"/>
          <Divider/>
          <ListItem primaryText="Product 2"/>
        </List>
        <RaisedButton type="submit" value="checkout" label="Proceed To Checkout" backgroundColor="#FA8072" style={ styles.button }  />
      </Paper>
    </div>
  )
 }
}


import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (mapStateToProps, mapDispatchToProps) (OrderComponent)