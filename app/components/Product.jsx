import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import NavBar from './NavBar'

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
    const styles = {
      root: {
        height: '70%',
        display: 'flex',
        justifyContent: 'space-around',
      }
    };

// <Paper style={{height: 'auto', width: '40%', margin : '20px', backgroundImage: `url(${product.imageURL})`, backgroundSize: 'cover'}} zDepth={2} >
//              <div style={{width: '100%', height: 'auto', display:'block', margin:'auto'}}>
//              </div>
//           </Paper>


    //<img src={product.imageURL } style={{width: '100%', height: 'auto', display:'block', margin:'auto'}}/>
    const product = this.props.products.selectedProduct
    return (
      <div>
      <NavBar />
       <div style={styles.root} >
          <Paper style={{maxHeight: '400px', width: '40%', margin : '20px'}} zDepth={2} >
             <img src={product.imageURL } style={{maxWidth: '100%', height: '100%', display:'block', margin:'auto'}}/>
          </Paper>

          <Paper style={{height: 'auto', width: '40%', margin : '20px', display : 'block', position: 'relative'}} zDepth={1} >
              <div style={{textAlign:'center'}}>
                <h2>{product.name}</h2>
              </div>
              <div style={{textAlign:'center', color:'green'}}>
                <h4>In Stock.</h4>
              </div>
              <div style={{textAlign:'left'}}>
                {product.description}
              </div>
               <div style={{textAlign:'left', marginTop: '15px'}}>
                {product.tags && ('Tags: ' + product.tags.join(', '))}
              </div>
              <div style={{textAlign:'center'}}>
                <h4>Price: ${product.price}</h4>
              </div>
              <RaisedButton label="Add to Cart" labelColor='white' style={{ display : 'block', margin: 'auto'}}backgroundColor="#FA8072"/>
          </Paper>

      </div>
    </div>
    )
  }
}
)
