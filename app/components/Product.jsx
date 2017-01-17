import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import NavBar from './NavBar';
import {Link} from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

// import {addToOrder} from '../reducers/cart';

function mapStateToProps(state) {
  return { selectedProduct: state.products.selectedProduct }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     //dispatch add to cart
//     addToOrder: function(product) {
//       dispatch(addToOrder(product));
//     }
// }

export const Product = (props) => {
  const product = props.selectedProduct
  return (
    <div>
    <NavBar />
     <div style={styles.root} >
        <Paper style={styles.prodImageContainer} zDepth={2} >
           <img src={product.imageURL } style={styles.prodImage}/>
        </Paper>

        <Paper style={styles.prodDescriptionContainer} zDepth={1} >
            <div style={{display : 'block'}}>
              <div style={styles.name}>
                <h2>{product.name}</h2>
              </div>
              <div style={styles.stockStatus}>
                <h4>In Stock.</h4>
              </div>
              <div style={styles.description}>
                {product.description}
              </div>
              <div style={styles.tags}>
                {"Tags: "}
                {product.tags && (
                  product.tags.map((tag, i) => (
                    <div key={tag} style={styles.tag}>
                    <Link to={`/products?tags=${tag}`}>{tag}</Link>
                    {(i < product.tags.length - 1)
                    ? ", "
                    : null
                    }
                    </div>
                    ))
                )
                }
              </div>
              <div style={styles.price}>
                <h4>Price: ${product.price}</h4>
              </div>
            </div>
            <div style={styles.buttonContainer}>
            <RaisedButton label="Add to Cart" labelColor='white' style={styles.button} backgroundColor="#FA8072"/>
            </div>
        </Paper>
    </div>
  </div>)
}

export default connect (mapStateToProps) (Product)

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
    paddingRight: '10px',
  },
  tag:{
    marginLeft: '5px',
    display: 'inline-block'
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

