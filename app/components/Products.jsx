import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {getProduct, getProducts, setProduct} from '../reducers/products';
import NavBar from './NavBar';

import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

function mapStateToProps(state, ownProps) {
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductsDispatch: function(type, info) {
      dispatch(getProducts(type, info));
    },
    setProductDispatch : function(product){
      dispatch(setProduct(product));
    }
  }
}

export class Products extends Component {
  constructor(props){
      super();
      this.state = {
      }
      this.handleClick = this.handleClick.bind(this);
      if (props.route.path === '/products/categories/:id') props.getProductsDispatch('category', props.routeParams.id);
      else props.getProductsDispatch();

    }

  handleClick(index){
    this.props.setProductDispatch(this.props.products.products[index]);
  }

  render() {

    const products = this.props.products.products;
    
   
    return (
      <div>
      <NavBar />
       <div style={styles.root} id="gridlist">
        <GridList
          cellHeight={'auto'}
          style={styles.gridList}
          cols={3}
        >
          {products && products.map((product, index) => (
            <GridTile
              key={product.id}
              value={index}
              onClick={()=>this.handleClick(index)}
            >
            <Link to={`/products/${product.id}`}>
              <Paper style={styles.product} zDepth={2} >
                <div>
                  <img id='product-image' src={product.imageURL } style={styles.prodImage}/>
                  <div id='product-name' style={styles.centerElements}>
                    {product.name}
                  </div>
                  <div style={styles.centerElements}>
                    ${product.price}
                  </div>
                </div>
              </Paper>
              </Link>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>)
  }
}

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
      product: {
        maxWidth: '250px', 
        height: '200px', 
        width: 'auto', 
        margin : '20px'
      },
      prodImage: {
        maxHeight: '150px', 
        width: 'auto', 
        display:'block', 
        margin:'auto'
      },
      centerElements: {
        textAlign:'center'
      },
    };

export default connect (mapStateToProps, mapDispatchToProps) (Products)
