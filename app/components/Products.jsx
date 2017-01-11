import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProduct, getProducts} from '../reducers/products';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';

function mapStateToProps(state, ownProps) {
  console.log(state, ownProps);
  return { products: state.products }
}

function mapDispatchToProps(dispatch) {
  return {
    getProductsDispatch: function(specification) {
      dispatch(getProducts(specification));
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps) (
  class Products extends Component {
  constructor(props){
      super();
      this.state = {
      }

      console.log(props);
      // if (props.route.path === '/products/categories/:id') props.getProductsDispatch({category_id: props.routeParams.id});
      // props.getProductsDispatch();
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

    const products = [
      {
        id: 1,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99
      },
      {
        id: 2,
        name: '2nd',
        imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
        price: 53.99
      },
      {
        id: 3,
        name: '3rd',
        imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
        price: 15.99
      },
      {
        id: 4,
        name: 'fourth',
        imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-9wAnahSjAL82jJl7uKPxA8TL4Zw_Q1Tb1d4ZsT4DWl-CnIQp',
        price: 56.99
      },
      {
        id: 5,
        name: 'first',
        imageURL: 'http://www.anniescostumes.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_name_32516.jpg',
        price: 5.99
      },
      {
        id: 6,
        name: '2nd',
        imageURL: 'http://images.asadart.com/sources/com/halloweenexpress/images/imagecache/354-375-ru887871.jpg',
        price: 53.99
      },
      {
        id: 7,
        name: '3rd',
        imageURL: 'https://img.costumecraze.com/images/vendors/california/PET20114-Nothin-But-A-Hound-Dog-Dog-Costume-large.jpg',
        price: 15.99
      },
      {
        id: 8,
        name: 'fourth',
        imageURL: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR-9wAnahSjAL82jJl7uKPxA8TL4Zw_Q1Tb1d4ZsT4DWl-CnIQp',
        price: 56.99
      }
    ]
    return (
      <div>
       <div style={styles.root}>
        <GridList
          cellHeight={'auto'}
          style={styles.gridList}
          cols={3}
        >
          {products.map((product) => (
            <GridTile
              key={product.id}
            >
              <Paper style={{maxWidth: '250px', height: '200px', width: 'auto', margin : '20px'}} zDepth={2} >
                <div>
                  <img src={product.imageURL } style={{maxHeight: '150px', width: 'auto', display:'block', margin:'auto'}}/>
                  <div style={{textAlign:'center'}}> 
                    {product.name}
                  </div>
                  <div style={{textAlign:'center'}}> 
                    ${product.price}
                  </div>
                </div>
              </Paper>
            </GridTile>
          ))}
        </GridList>
      </div>
    </div>
    )
  }
}
)

//  {products.map(product => (
//           <div key={product.id}>
//             <div>{product.name}</div>
//             <img style={{height: '150px', width: '150px'}} src={product.imageURL}></img>
//             <div>{product.price}</div>
//           </div>
//         ))
//         }