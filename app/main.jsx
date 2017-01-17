'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store'

import LandingPage from './components/LandingPage'
import CartContainer from './components/CartContainer'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'
import {Options} from './components/SignInOptions'
<<<<<<< HEAD

import Products from './components/Products'
import Product from './components/Product'

=======
import Products from './components/Products'
import Product from './components/Product'

import {getAllProducts, getListProducts, getSelectedProduct} from './reducers/products'
import {getCategories} from './reducers/categories';

import {fetchOrder, setTotal} from './reducers/cart'
>>>>>>> aa453c0935197e5d063bcfe0289e1c396a3f8282

injectTapEventPlugin();

const onProductsEnter = (nextRouterState) => {
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
  store.dispatch(fetchOrder())
}

const onCartEnter = () => {
  store.dispatch(fetchOrder())
}

const onLandingPageEnter = () => {
  store.dispatch(getCategories());
}

render (

  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} onEnter={onLandingPageEnter}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
<<<<<<< HEAD
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
      <Route path="/products/categories/:id" component={Products} />
=======
        <Route path="/cart" component={CartContainer} onEnter={onCartEnter}/>
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={Product} onEnter={onSingleProductEnter}/>
      <Route path="/products/categories/:id" component={Products} onEnter={onProductsEnter} />
>>>>>>> aa453c0935197e5d063bcfe0289e1c396a3f8282
      </Router>
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('main')
)