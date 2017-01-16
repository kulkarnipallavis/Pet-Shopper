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
    title={<div onClick={handleClick}>Teenie and Friends</div>}
    style={titleStyles.barColor}
    titleStyle={titleStyles.titleColor}
    iconElementLeft= {<DropDownProducts/>}
    iconElementRight= {<NavLoginSignupCart/>}
  />
  )
};

export default NavBar;