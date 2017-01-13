import React from 'react';
import AppBar from 'material-ui/AppBar';
import DropDownProducts from './DropDownProducts';

// browse products popover dropdown menu
// search products dropdown
// logo/title?
// login/signup  or logout
// cart

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

//iconClassNameRight="muidocs-icon-navigation-expand-more"
  return (
  <AppBar
    title="Teenie and Friends?"
    style={titleStyles.barColor}
    titleStyle={titleStyles.titleColor}
    iconElementLeft= {<DropDownProducts/>}
  />
  )
};

export default NavBar;