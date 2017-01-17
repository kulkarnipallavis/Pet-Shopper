import React, { Component } from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import Forbidden from './Forbidden';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Addbox from 'material-ui/svg-icons/content/add-box';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

function mapStateToProps(state) {
  return {
    user: state.auth,
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     }
// }

export class AddProduct extends Component {
  constructor (props) {
    super();
    this.state = {
      value: 1
    }
  }
  render () {
    return (
    <div>
      <NavBar />
        {this.props.user && this.props.user.isAdmin ?
          <div style={styles.root} >
            <Paper style={styles.prodImageContainer} zDepth={2} >
               <Addbox />
               <h1> Upload An Image </h1>
            </Paper>
            <Paper style={styles.prodDescriptionContainer} zDepth={1} >
                <div style={{display : 'block'}}>
                  <form >
                    <div style={styles.name}>
                      <TextField
                        name="productName"
                        hintText="Product Name"
                        floatingLabelText="Product Name"
                      /><br />
                      <br />
                      <SelectField
                        floatingLabelText="Stock Status"
                        autoWidth={true}
                        value={this.state.value}
                      >
                        <MenuItem value={1} primaryText="In Stock" />
                        <MenuItem value={2} primaryText="On Backorder" />
                        <MenuItem value={3} primaryText="Out of Stock" />
                      </SelectField><br />
                      <br />
                      <TextField
                        name="productDescription"
                        hintText="Product Description"
                        floatingLabelText="Product Description"
                      /><br />
                      <br />
                      <TextField
                        name="tags"
                        hintText="Product Tags"
                        floatingLabelText="Product Tags"
                      /><br />
                      <br />
                      <TextField
                        name="price"
                        hintText="Price"
                        floatingLabelText="Price"
                      /><br />
                      <br />
                    </div>
                  </form>
                </div>
                <div style={styles.buttonContainer}>
                <RaisedButton label="Add Product" labelColor='white' style={styles.button} backgroundColor="#FA8072"/>
                </div>
            </Paper>
          </div>
          : <Forbidden />
        }
  </div>)
}

  }
  
export default connect (mapStateToProps, mapDispatchToProps) (AddProduct)

const styles = {
  root: {
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  prodImageContainer: {
    maxHeight: '400px', 
    width: '40%', 
    margin : '20px'
  },
  prodImage: {
    maxWidth: '100%', 
    height: '100%', 
    display:'block', 
    margin:'auto'
  },
  prodDescriptionContainer: {
    height: 'auto', 
    width: '40%', 
    margin : '20px', 
    display : 'block', 
    position: 'relative'
  },
  name:{
    textAlign:'center'
  },
  stockStatus:{
    textAlign:'center', 
    color:'green'
  },
  description: {
    textAlign:'left', 
    paddingLeft: '10px', 
    paddingRight: '10px'
  },
  tags:{
    textAlign:'left', 
    marginTop: '15px', 
    paddingLeft: '10px', 
    paddingRight: '10px'
  },
  price: {
    textAlign:'center'
  },
  buttonContainer:{
    display : 'block', 
    bottom: '0', position: 
    'absolute', 
    right:'0'
  },
  button:{ 
    display : 'block', 
    margin: 'auto'
  }
}

