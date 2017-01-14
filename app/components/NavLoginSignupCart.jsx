import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import IconButton from 'material-ui/IconButton';
import {browserHistory, Link} from 'react-router';

const isLoggedIn = true;

const NavLoginSignupCart = () => {
  return (
    <div>
      {({isLoggedIn})
        ? (
          <div>
            <FlatButton
              backgroundColor="salmon"
              hoverColor="salmon"
              rippleColor="salmon"
              label="Login"
              labelStyle={{color:'white'}}
              containerElement={<Link to="/login"/>}
            />
            <FlatButton
              backgroundColor="salmon"
              hoverColor="salmon"
              rippleColor="salmon"
              label="Sign Up"
              labelStyle={{color:'white'}}
              containerElement={<Link to="/signup"/>}
            />
            <IconButton
              iconStyle={{color: 'white', marginBottom:'6px'}}
              containerElement={<Link to="/cart"/>}
            >
              <ShoppingCart/>
            </IconButton>
          </div>
          )
        : (
          <div>
            <FlatButton
              backgroundColor="salmon"
              hoverColor="salmon"
              rippleColor="salmon"
              label="Logout"
              labelStyle={{color:'white'}}
              containerElement={<Link to="/logout"/>}
            />
            <IconButton
              iconStyle={{color: 'white', marginBottom:'6px'}}
              containerElement={<Link to="/account"/>}
            >
              <AccountBox/>
            </IconButton>
            <IconButton
              iconStyle={{color: 'white', marginBottom:'6px'}}
              containerElement={<Link to="/cart"/>}
            >
              <ShoppingCart/>
            </IconButton>
          </div>
        )
      }
    </div>
  )
}
export default NavLoginSignupCart;