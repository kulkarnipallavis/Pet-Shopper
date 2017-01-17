import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import {getCurrentOrder, getOrderHistory} from '../reducers/userAccount'
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const mapStateToProps = state => {
	return {
		orderHistory : state.orderHistory,
		currentOrder : state.currentOrder
	} 
}

const mapDispatchToProps = (dispatch) => {
	// console.log(getState());
	const id = 1 ;//getState().auth.user.id;
	return {
		getCurrentOrderDispatch : (id) => {
			dispatch(getCurrentOrder(id));
		},
		getOrderHistoryDispatch : (id) => {
			dispatch(getOrderHistory(id));
		}
	}
}

export class UserAccount extends Component{

	constructor(props){
		super(props);
		// props.getCurrentOrderDispatch();
		// props.getOrderHistoryDispatch();
	}

	render(){
		const styles = {
	      root: {
	        height: '70%',
	        display: 'flex',
	        justifyContent: 'space-around',
	      }
	    };
		// const currentOrder = this.props.orders.currentOrder;
		// const orderHistory = this.props.orders.orderHistory;
		const orderHistory = [1,2,3,4];
		const currentOrder = {
	        id: 1,
	        products: [{
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
			      }],
	        status: 'open',
	        created_at : '2017-01-12 11:46:25.939-05'
	    };

		return(
			<div>
			<NavBar />
			<div style={styles.root} >
				<Paper style={{height: 'auto', width: '700px', margin : '20px', display : 'block', position: 'relative'}} zDepth={2} >
					<div style={{display : 'block'}}>
						<div id="product-name" style={{textAlign:'left'}}>
						<h2>Current Order</h2>
		                  <h2>Status:{currentOrder.status}</h2>
		                </div>
		                <div style={{textAlign:'left', paddingLeft: '10px', paddingRight: '10px'}}>
		                  Order created at: {currentOrder.created_at}
		                </div>
		                {	
		                	currentOrder.products && currentOrder.products.map((product, index) =>(
			                
					            <GridTile
					              key={product.id}
					              value={index}
					              onClick={()=>this.handleClick(index)}
					            >
						            <Link to={`/products/${product.id}`}>
						              
						                <div>
						                  <div id='product-name' style={{textAlign:'left'}}>
						                    {product.name}
						                  </div>
						                  <div style={{textAlign:'left'}}>
						                  	<img id='product-image' src={product.imageURL } style={{maxHeight: '150px', width: 'auto', display:'block', margin:'auto'}}/>
						                  </div>
						                  <div style={{textAlign:'left'}}>
						                    ${product.price}
						                  </div>
						                </div>
						             
						            </Link>
					            </GridTile>
					        ))
		                }
		                
					</div>
					<div>
					{
						orderHistory && orderHistory.map((order, index) =>(
							<paper style={{height: 'auto', width: '700px', margin : '20px', display : 'block', position: 'relative'}} zDepth={2} >
								<div style={{display : 'block'}}>
									<div id="product-name" style={{textAlign:'left'}}>
										{order}
									</div>
								</div>
							</paper>
						))
					}
					</div>
				</Paper>
			</div>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)