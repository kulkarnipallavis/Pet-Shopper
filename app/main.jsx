'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store'

import LandingPage from './components/LandingPage'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'
import {Options} from './components/SignInOptions'
import Products from './components/Products'
import Product from './components/Product'

import {getAllProducts, getListProducts, getSelectedProduct} from './reducers/products'

injectTapEventPlugin()

const onProductsEnter = (nextRouterState) => {
  console.log(nextRouterState);
  store.dispatch(getAllProducts());
  if (nextRouterState.params.id) {
    store.dispatch(getListProducts( undefined, undefined, nextRouterState.params.id));
  }
  else if (nextRouterState.location.query.name || nextRouterState.location.query.tags){
    store.dispatch(getListProducts(nextRouterState.location.query.name, nextRouterState.location.query.tags));
  }
  else store.dispatch(getListProducts());
};

const onSingleProductEnter = (nextRouterState) => {
  store.dispatch(getSelectedProduct(nextRouterState.params.id));
}

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={Product} onEnter={onSingleProductEnter}/>
      <Route path="/products/categories/:id" component={Products} onEnter={onProductsEnter} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)