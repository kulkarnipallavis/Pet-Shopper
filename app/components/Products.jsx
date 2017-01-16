import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts, setProduct} from '../reducers/products';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router'
import NavBar from './NavBar'

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
    //if (!props.products.products.length) { return null }
    const products = this.props.products.products;
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
              <Paper style={{maxWidth: '250px', height: '200px', width: 'auto', margin : '20px'}} zDepth={2} >
                <div>
                  <img id='product-image' src={product.imageURL } style={{maxHeight: '150px', width: 'auto', display:'block', margin:'auto'}}/>
                  <div id='product-name' style={{textAlign:'center'}}>
                    {product.name}
                  </div>
                  <div style={{textAlign:'center'}}>
                    ${product.price}
                  </div>
                </div>
              </Paper>
              </Link>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
    )


  }
}

export default connect (mapStateToProps, mapDispatchToProps) (Products)
