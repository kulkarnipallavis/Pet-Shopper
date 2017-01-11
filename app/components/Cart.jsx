import React from 'react';
import {Link} from 'react-router';

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear'

const styles = {

  heading : {
    fontFamily : "Roboto, sans-serif",
    textDecoration: "none"
  }

}

export const Cart = ({}) => {
  return (
    <div>
      <div>
        <Link to="/home" style={ styles.heading }>Back to Shopping</Link>
      </div>
      <Paper zDepth={1}>
        <Subheader>Cart</Subheader>
        <List>
          <ListItem primaryText="Hello" leftAvatar={<img src="images/buffaloblue.jpeg" style={{'height':'70%', 'width':'2%'}} />} rightIcon={<ClearIcon/>}/>
          <Divider/>
          <ListItem primaryText="Hello" leftAvatar={<img src="images/buffaloblue.jpeg" style={{'height':'70%', 'width':'2%'}} />} rightIcon={<ClearIcon/>}/>
        </List>
      </Paper>
      <Paper zDepth={1}>
        <Subheader>Order Summary</Subheader>
        <List>
          <ListItem primaryText="Hello"/>
          <Divider/>
          <ListItem primaryText="Hello"/>
        </List>
      </Paper>
    </div>
  )
}


import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {},
) (Cart)