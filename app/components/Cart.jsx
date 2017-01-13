import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import RaisedButton from 'material-ui/RaisedButton';

import {deleteFromOrder} from '../reducers/cart';


const mapStateToProps = (state) => {
  return {products : state.products}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFromOrderDispatch: (product) => {
      dispatch(deleteFromOrder(product))
    }
  }
}

export class Cart extends Component {

constructor(props) {
  super(props);
  this.handleClick = this.handleClick.bind(this);
}

handleClick(product){
  this.props.deleteFromOrderDispatch(product);
}

render() { 
  const styles = {
  button : {
    margin: 20
  },
  heading : {
    fontFamily : "Roboto, sans-serif",
    textDecoration: "none",
    color: "#808080",
    display: "block",
    paddingBottom: "15px"
  },
  subheadings: {
    color: "#FA8072"
  },
  cartContainer: {
    paddingTop: "10%",
    float: "left",
    width: "60%"
  },
  cart : {
    width: "70%",
    margin: "auto",
  },
  order: {
    paddingTop: "10%",
    float: "left",
    width: "30%"
  }
}

const products = [
      {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99,
        description : 'first product description'
      },
      {
        id: 2,
        name: '2nd',
        imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
        price: 53.99,
        description : 'second product description'
      },
      {
        id: 3,
        name: '3rd',
        imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
        price: 10.99
      }
      ]
  return (
    <div>
      <Navbar />
      <div style={ styles.cartContainer }>
        <div style={ styles.cart }>
        <Link to="/home" style={ styles.heading }>Back to Shopping</Link>
        <Paper zDepth={1}>
          <Subheader style={ styles.subheadings }>Cart</Subheader>
          <List>
          {products && products.map((product, index) => (
            <ListItem key={product.id} primaryText={product.name} rightIcon={<ClearIcon onClick={() => this.handleClick(product)}/>}/>
            ))}
          </List>
        </Paper>
        </div>
      </div>
      <div style={ styles.order }>
      <Paper zDepth={1}>
        <Subheader style={ styles.subheadings }>Order Summary</Subheader>
        <List>
          <ListItem primaryText="Hello"/>
          <Divider/>
          <ListItem primaryText="Hello"/>
        </List>
        <RaisedButton type="submit" value="checkout" label="Proceed To Checkout" backgroundColor="#FA8072" style={ styles.button }  />
      </Paper>
      </div>
    </div>
    )
  }
}


import {login} from 'APP/app/reducers/auth'
import {connect} from 'react-redux'

export default connect (mapStateToProps, mapDispatchToProps) (Cart)