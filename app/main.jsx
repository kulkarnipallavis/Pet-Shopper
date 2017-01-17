'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pinkA100} from 'material-ui/styles/colors';
import store from './store'

import LandingPage from './components/LandingPage'
import CartContainer from './components/CartContainer'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'
import {Options} from './components/SignInOptions'
import Products from './components/Products'
import Product from './components/Product'
import Checkout from './components/Checkout'

injectTapEventPlugin();

import {getAllProducts, getSelectedProduct} from './reducers/products'

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#FA8072",
  }
});

const onProductsEnter = () => {
  store.dispatch(getAllProducts());
};

const onSingleProductEnter = (nextRouterState) => {
  store.dispatch(getSelectedProduct(nextRouterState.params.id));
}

render (

  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={Product} onEnter={onSingleProductEnter}/>
        <Route path="/products/categories/:id" component={Products} />
        <Route path="/checkout" component={Checkout} />
      </Router>
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('main')
)