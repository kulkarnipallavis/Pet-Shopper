import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
import ShoppingCart from './ShoppingCart';
import OrderComponent from './OrderComponent';

export default () => {

  const styles = {
    cartContainer: {
      paddingTop: "10%",
      float: "left",
      width: "100%"
    }
  }

  return (
    <div>
      <Navbar/>
      <ShoppingCart/>
      <OrderComponent/>
    </div>
  )
}

