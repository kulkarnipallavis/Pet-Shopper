import React, {Component} from 'react';
import {Link} from 'react-router';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import RaisedButton from 'material-ui/RaisedButton';

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {total: state.cart.orderTotal}
}

export const OrderComponent = (props) => {

  let total = props.total;
  total = total.toString()

  while (total.length < 3) total = "0" + total;
  total = total.split("")
  total.splice(-2, 0, ".")
  total = total.join("")

  return (
    <div style={ styles.order }>
      <Paper zDepth={1}>
        <Subheader style={ styles.subheadings }>Order Summary</Subheader>
        <List>
          <ListItem
            primaryText={`Subtotal:  $${total}`}
            />
          <ListItem
            primaryText='Shipping: Free'
            />
          <ListItem
            primaryText= {`Total:  $${total}`}
            />
        </List>
        <RaisedButton type="submit" value="checkout" label="Proceed To Checkout" href="/checkout" labelColor="white" backgroundColor="#FA8072" style={ styles.button }  />
      </Paper>
    </div>
  )
}

export default connect(mapStateToProps)(OrderComponent)

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