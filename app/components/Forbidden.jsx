import React from 'react'
import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'


import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



export default (props) => (
	<div style={ style.container }>
	    <h1 style={ style.title } >401 User Not Authorized</h1>
	</div>
)

const style = {
  title : {
    fontFamily : "Roboto, sans-serif",
    color : "#FA8072"
  },
  container : {
    textAlign : "center",
    paddingTop : "10%"
  }
};