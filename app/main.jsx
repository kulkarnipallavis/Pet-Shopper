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
import UserAccount from './components/UserAccount'


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

injectTapEventPlugin()

render (
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={LandingPage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/userAccount" component={UserAccount} />
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('main')
  )