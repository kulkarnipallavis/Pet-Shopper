import React from 'react';
import AppBar from 'material-ui/AppBar';

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
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
  return (
  <AppBar
    title="Title"
    style={titleStyles.barColor}
    titleStyle={titleStyles.titleColor}
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  )
};

export default NavBar;