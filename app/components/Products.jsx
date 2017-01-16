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
//     // const products = [
//     //   {
//     //     id: 1,
//     //     name: 'first',
//     //     imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
//     //     price: 5.99,
//     //     description : 'first product description'
//     //   },
//     //   {
//     //     id: 2,
//     //     name: '2nd',
//     //     imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
//     //     price: 53.99,
//     //     description : 'second product description'
//     //   },
//     //   {
//     //     id: 3,
//     //     name: '3rd',
//     //     imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
//     //     price: 15.99,
//     //     description : 'third product description'
//     //   },
//     //   {
//     //     id: 4,
//     //     name: 'fourth',
//     //     imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-9wAnahSjAL82jJl7uKPxA8TL4Zw_Q1Tb1d4ZsT4DWl-CnIQp',
//     //     price: 56.99,
//     //     description : 'fourth product description'
//     //   },
//     //   {
//     //     id: 5,
//     //     name: 'first',
//     //     imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
//     //     price: 5.99,
//     //     description : 'fifth product description'
//     //   },
//     //   {
//     //     id: 6,
//     //     name: '2nd',
//     //     imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
//     //     price: 53.99,
//     //     description : 'sixth product description'
//     //   },
//     //   {
//     //     id: 7,
//     //     name: '3rd',
//     //     imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
//     //     price: 15.99,
//     //     description : 'seventh product description'
//     //   },
//     //   {
//     //     id: 8,
//     //     name: 'fourth',
//     //     imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-9wAnahSjAL82jJl7uKPxA8TL4Zw_Q1Tb1d4ZsT4DWl-CnIQp',
//     //     price: 56.99,
//     //     description : 'eighth product description'
//     //   }
//     // ]
//     // this.props.products.products = products;
   
   
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
