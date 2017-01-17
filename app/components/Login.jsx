import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from './NavBar';
import Paper from 'material-ui/Paper';

const style = {
  button : {
    margin: 20
  },
  title : {
    fontFamily : "Roboto, sans-serif",
    color : "#FA8072"
  },
  container : {
    textAlign : "center",
    paddingTop : "5%"
  },
  form : {
    width: '50%',
    height: '50%',
    marginLeft: '25%',
    paddingTop : '5px'
  }
};

export const Login = ({ login }) => (
  <div>
    <NavBar/>
    <div style={ style.container }>
      <Paper style={style.form} zDepth={2} >
        <h1 style={ style.title } >Login</h1>
          <form onSubmit={evt => {
              evt.preventDefault()
              login(evt.target.username.value, evt.target.password.value)
            } }>
              <TextField
                name="username"
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
              <RaisedButton type="submit" value="Login" label="Login" backgroundColor="#FA8072" style={ style.button } labelStyle={{color: 'white'}}/>
          </form>
      </Paper>
    </div>
  </div>
)

import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (
  state => ({}),
  {login},
) (Login)
