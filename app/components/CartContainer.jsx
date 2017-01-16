import React, {Component} from 'react';
import {Link} from 'react-router';

import Navbar from './NavBar';
// import {List, ListItem} from 'material-ui/List';
// import Divider from 'material-ui/Divider';
// import Paper from 'material-ui/Paper';
// import Avatar from 'material-ui/Avatar';
// import Subheader from 'material-ui/Subheader';
// import ClearIcon from 'material-ui/svg-icons/content/clear';
// import RaisedButton from 'material-ui/RaisedButton';
import ShoppingCart from './ShoppingCart';
import OrderComponent from './OrderComponent';

export class CartContainer extends Component {

// constructor(props) {
//   super(props);
//   this.handleClick = this.handleClick.bind(this);
// }

// handleClick(product){
//   this.props.deleteFromOrderDispatch(product);
// }

// const products = [
//       {
//         id: 1,
//         name: 'first',
//         imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
//         price: 5.99,
//         description : 'first product description'
//       },
//       {
//         id: 2,
//         name: '2nd',
//         imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
//         price: 53.99,
//         description : 'second product description'
//       },
//       {
//         id: 3,
//         name: '3rd',
//         imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
//         price: 10.99
//       }
//       ]
  render () {

  // const styles = {

  //   cartContainer: {
  //     paddingTop: "10%",
  //     float: "left",
  //     width: "100%"
  //   }
  // }

    return (
      <div>
        <Navbar/>
        <ShoppingCart/>
      </div>
      )
  }

}
