'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'

import store from './store'
import Jokes from './components/Jokes'
import Login from './components/Login'
import WhoAmI from './components/WhoAmI'
import SignUp from './components/SignUp'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const ExampleApp = connect(
  ({ auth }) => ({ user: auth })
) (
  ({ user, children }) =>
   
    <div>
      <nav>
        {user ? <WhoAmI/> : <Login/>}
      </nav> 
      {children}
    </div>
   
)

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={ExampleApp}>
          <IndexRedirect to="/jokes" />
          <Route path="/jokes" component={Jokes} />
        </Route>
        <Route path="/signup" component={SignUp} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
)