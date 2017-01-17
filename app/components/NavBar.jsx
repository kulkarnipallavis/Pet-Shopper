import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownProducts from './DropDownProducts';
import {browserHistory, Link} from 'react-router';
import NavLoginSignupCart from './NavLoginSignupCart';

const NavBar = () => {
  const titleStyles = {
  title: {
    cursor: 'pointer'
  },
  barColor:{
    backgroundColor: '#FA8072'
  },
  titleColor:{
    color: '#FAFAFA'
  }
};

const handleClick = () => {
  browserHistory.push('/');
}

  return (
  <AppBar
    style={titleStyles.barColor}
    titleStyle={titleStyles.titleColor}
    title={<div onClick={handleClick}><img src="/images/logo.jpg"/></div>}
    iconElementLeft= {<DropDownProducts/>}
    iconElementRight= {<NavLoginSignupCart/>}
  />
  )
};

export default NavBar;