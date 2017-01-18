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

import {getAllProducts, getListProducts, getSelectedProduct} from './reducers/products'
import {getCategories} from './reducers/categories';
import {fetchOrder, setTotal} from './reducers/cart';
import UserAccount from './components/UserAccount';
import {getCurrentOrder, getOrderHistory} from './reducers/userAccount'


injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: "#FA8072",
  }
});

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
const onCheckoutEnter = () => {
  store.dispatch(fetchOrder())
}

const onLandingPageEnter = () => {
  store.dispatch(getCategories());
}

const onUserAccountEnter = () => {
  store.dispatch(getOrderHistory());
}

render (

  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} onEnter={onLandingPageEnter}/>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={CartContainer} onEnter={onCartEnter}/>
        <Route path="/products" component={Products} onEnter={onProductsEnter} />
        <Route path="/products/:id" component={Product} onEnter={onSingleProductEnter}/>
        <Route path="/checkout" component={Checkout} onEnter={onCheckoutEnter}/>
        <Route path="/products/categories/:id" component={Products} onEnter={onProductsEnter} />
        <Route path="/userAccount" component={UserAccount} onEnter={onUserAccountEnter}/>
      </Router>
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('main')
)