import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
import ShoppingCart from './ShoppingCart';
import OrderComponent from './OrderComponent';
import RaisedButton from 'material-ui/RaisedButton';

export default () => {

  const styles = {
    button : {
    margin: "20px"
    },
    cartContainer: {
      paddingTop: "10%",
      float: "left",
      width: "100%"
    }
  }

  return (
    <div>
      <Navbar/>
      <RaisedButton
          label="Back to Shopping"
          href="/"
          style={styles.button}
          backgroundColor="darkgrey"
          labelColor="white"
      />
      <div>
        <ShoppingCart/>
        <OrderComponent/>
      </div>
    </div>
  )
}

