import React from 'react'
import TextField from 'material-ui/TextField';

export const Login = ({ login }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    login(evt.target.username.value, evt.target.password.value)
  } }>
    <TextField
      name="username"
      hintText="Username"
      floatingLabelText="Username"
    /><br />
    <br />
    <TextField
      name="password"
      hintText="Password"
      floatingLabelText="Password"
      type="password"
    /><br />
    <br />
    <input type="submit" value="Login" />
  </form>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
