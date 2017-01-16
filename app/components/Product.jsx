import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from './NavBar'

const styles = {
  root: {
    height: '70%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  prodImage: {
    maxWidth: '100%', 
    height: '100%', 
    display:'block', 
    margin:'auto'
  },
  prodDescription: {
    maxHeight: '400px', 
    width: '40%', 
    margin : '20px'
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
function mapStateToProps(state, ownProps) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductDispatch: function(id) {
      dispatch(getProduct(id));
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (
  class Products extends Component {
  constructor(props){
      super();
      this.state = {
      }
      this.handleClick = this.handleClick.bind(this);
      props.getProductDispatch(props.routeParams.id);
    }

  handleClick(index){
    this.props.setProductDispatch(this.props.products.products[index]);
  }

  render() {
    const product = this.props.products.selectedProduct
    return (
      <div>
      <NavBar />
       <div style={styles.root} >
          <Paper style={styles.prodImage} zDepth={2} >
             <img src={product.imageURL } style={styles.prodDescription}/>
          </Paper>

          <Paper style={styles.prodDescription} zDepth={1} >
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
                  {product.tags && ('Tags: ' + product.tags.join(', '))}
                  }
                </div>
                <div style={styles.price}>
                  <h4>Price: ${product.price}</h4>
                </div>
              </div>
              <div style={styles.buttonContainer}>
              <RaisedButton label="Add to Cart" labelColor='white' style={styles.button}backgroundColor="#FA8072"/>
              </div>
          </Paper>
      </div>
    </div>)
  }
}
)
