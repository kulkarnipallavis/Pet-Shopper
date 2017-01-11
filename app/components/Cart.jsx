import React from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import RaisedButton from 'material-ui/RaisedButton';

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
    paddingTop: "10%",
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

export const Cart = () => {
  return (
    <div>
      <Navbar />
      <div style={ styles.cartContainer }>
        <div style={ styles.cart }>
        <Link to="/home" style={ styles.heading }>Back to Shopping</Link>
        <Paper zDepth={1}>
          <Subheader style={ styles.subheadings }>Cart</Subheader>
          <List>
            <ListItem primaryText="Hello" leftAvatar={<img src="images/buffaloblue.jpeg" style={{'height':'70%', 'width':'2%'}} />} rightIcon={<ClearIcon/>}/>
            <Divider/>
            <ListItem primaryText="Hello" leftAvatar={<img src="images/buffaloblue.jpeg" style={{'height':'70%', 'width':'2%'}} />} rightIcon={<ClearIcon/>}/>
          </List>
        </Paper>
        </div>
      </div>
      <div style={ styles.order }>
      <Paper zDepth={1}>
        <Subheader style={ styles.subheadings }>Order Summary</Subheader>
        <List>
          <ListItem primaryText="Hello"/>
          <Divider/>
          <ListItem primaryText="Hello"/>
        </List>
        <RaisedButton type="submit" value="checkout" label="Proceed To Checkout" backgroundColor="#FA8072" style={ styles.button }  />
      </Paper>
      </div>
    </div>
  )
}


import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {},
) (Cart)