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
import Products from './components/Products'
import Product from './components/Product'
import TextField from 'material-ui/TextField';
injectTapEventPlugin();

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>

    <div>
      <nav>
        {user ? <WhoAmI/> : <Options/>}
      </nav>

      {children}
    </div>

)


render (

  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/" component={ExampleApp}/>
        <Route path="/home" component={LandingPage} />
        <Route path="/cart" component={CartContainer} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/" component={LandingPage} />
        <Route path="/products" component={Products} />
        <Route path="/products/:id" component={Product} />
      <Route path="/products/categories/:id" component={Products} />
      </Router>
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('main')
  )