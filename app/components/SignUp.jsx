import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export const SignUp = ({ signUp }) => (
  <form onSubmit={evt => {
    evt.preventDefault()
    signUp(evt.target.name.value, evt.target.email.value, evt.target.password.value)
  } }>
    <div>
      <TextField
        name="name"
        hintText="Name"
        floatingLabelText="Name"
      /><br />
      <br />
      <TextField
        name="email"
        hintText="Email"
        floatingLabelText="Email"
      /><br />
      <br />
      <TextField
        name="password"
        hintText="Password"
        floatingLabelText="Password"
        type="password"
      /><br />
      <br />
      <TextField
        name="passwordConfirm"
        hintText="Confirm Password"
        floatingLabelText="Confirm Password"
        type="password"
      /><br />
      <RaisedButton type="submit" value="signUp" label="Sign Up" style={style} />
    </div>
  </form>
);

import {signUp} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {signUp}
  ) (SignUp)
  



