import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {signUp} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

const style = {
  margin: 12,
};



function mapDispatchToProps(dispatch) {
  return {
    signUpSubmit: function(name, email, password) {
      dispatch(signUp(name, email, password));
    }
  }
}

export default connect (null, mapDispatchToProps) ( 
  class SignUp extends Component{
    constructor(){
      super();
      this.state = {
        password : "",
        errorText : "",
        disabled : true  
      }
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
      this.handleChangeConfirm = this.handleChangeConfirm.bind(this);
    }

    handleSubmit(evt){
      console.log("inside handleSubmit");
      evt.preventDefault();
      this.props.signUpSubmit(evt.target.name.value, evt.target.email.value, evt.target.password.value);  
    }

    handleChangePassword(evt){
        this.setState({
          password : evt.target.value
        })
    }

    handleChangeConfirm(evt){
      if(this.state.password !== evt.target.value){
        this.setState({
            errorText : "Passwords must match."
        })
      }else{
        this.setState({
            errorText : "",
            disabled : false
        })
      }
    }
   
    render(){
     return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              name="name"
              hintText="Name"
              floatingLabelText="Name"
              defaultValue="First User"
              onChange={this.handleChangeName}
            /><br />
            <br />
            <TextField
              name="email"
              hintText="Email"
              floatingLabelText="Email"
              defaultValue="first@email.com"
              onChange={this.handleChangeEmail}
            /><br />
            <br />
            <TextField
              name="password"
              hintText="Password"
              floatingLabelText="Password"
              type="password"
              onChange={this.handleChangePassword}
            /><br />
            <br />
            <TextField
              name="passwordConfirm"
              hintText="Confirm Password"
              floatingLabelText="Confirm Password"
              type="password"
              errorText={this.state.errorText}
              onChange={this.handleChangeConfirm}
            /><br />
            <RaisedButton type="submit" value="signUp" label="Sign Up" style={style} disabled={this.state.disabled} />
          </div>
        </form>
      );
    }
})
  



