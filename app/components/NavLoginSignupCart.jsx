import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import IconButton from 'material-ui/IconButton';
import {browserHistory, Link} from 'react-router';
import {connect} from 'react-redux'
import {logout} from '../reducers/auth'

function mapStateToProps(state, ownProps) {
  return { user: state.auth }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: function() {
      dispatch(logout());
    }
  }
}

export class NavLoginSignupCart extends Component {
  constructor(props){
      super();
  }

  render() {
    const isLoggedIn = (this.props.user) ? true : false;
    return (
      <div>
        {(!isLoggedIn)
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
                style={{verticalAlign:'middle'}}
                onClick={this.props.logout}
              />
              <IconButton
                iconStyle={{color: 'white'}}
                href="/account"
              >
                <AccountBox/>
              </IconButton>
              <IconButton
                iconStyle={{color: 'white'}}
                href="/cart"
              >
                <ShoppingCart/>
              </IconButton>
            </div>
          )
        }
      </div>
    )

  }
}

export default connect (mapStateToProps, mapDispatchToProps) (NavLoginSignupCart)