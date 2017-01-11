import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductsDispatch: function(specification) {
      dispatch(getProducts(specification));
    },
    setProductDispatch : function(product){
      dispatch(setProduct(product));
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
      console.log(props);
      // if (props.route.path === '/products/categories/:id') props.getProductsDispatch({category_id: props.routeParams.id});
      // props.getProductsDispatch();
    }

  handleClick(index){
    console.log("^^^^^^^^^", index);
    this.props.setProductDispatch(this.props.products.products[index]);
  }

  render() {
    //if (!props.products.products.length) { return null }
    //const products = props.products.products;
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '80%',
        height: '100%',
        overflowY: 'auto',
      },
    };
    const product = this.props.products.selectedProduct
    return (
      <div>
       <div style={styles.root} >
          <Paper style={{height: 'auto', width: '40%', margin : '20px'}} zDepth={2} >
             <img src={product.imageURL } style={{width: '100%', height: 'auto', display:'block', margin:'auto'}}/>
          </Paper>

          <Paper style={{height: 'auto', width: '40%', margin : '20px', display : 'block', position: 'relative'}} zDepth={1} >
              <div style={{textAlign:'center'}}> 
                {product.name}
              </div>
              <div style={{textAlign:'center'}}> 
                {product.description}
              </div>
              <div style={{textAlign:'center'}}> 
                ${product.price}
              </div>
              <RaisedButton label="Add to Cart" labelColor='white' style={{ display : 'block', margin: 'auto'}}backgroundColor="#FA8072"/>
          </Paper>

      </div>
    </div>
    )
  }
}
)
