import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import NavBar from './NavBar';
import {getCurrentOrder, getOrderHistory} from '../reducers/userAccount'
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

const mapStateToProps = state => {
	console.log("state!!!!!!!!!!", state);
	return {
		orderHistory : state.userAccount.orderHistory,
		currentOrder : state.userAccount.currentOrder,
		userId : state.auth.id
	} 
}

const mapDispatchToProps = (dispatch) => {
	// console.log(getState());
	const id = 1 ;//getState().auth.user.id;
	return {
		getCurrentOrderDispatch : (userId) => {
			dispatch(getCurrentOrder(id));
		},
		getOrderHistoryDispatch : (userId) => {
			dispatch(getOrderHistory());
		}
	}
}

export const UserAccount = (props) => {
	
		const styles = {
	      root: {
	        height: '70%',
	        display: 'flex',
	        justifyContent: 'space-around',
	      }
	    };
		// const currentOrder = this.props.orders.currentOrder;
		// const orderHistory = this.props.orders.orderHistory;
		// const orderHistory = [1,2,3,4];
		const orderHistory = props.orderHistory;
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
				<Tabs>
					<Tab label="Current Order"  style={{backgroundColor: '#EEEEEE', color:'black'}}>
					<div style={{display : 'block'}}>
						<div id="product-name" style={{textAlign:'left'}}>
						<h4>Current Order</h4>
		                  <h4>Status:{currentOrder.status}</h4>
		                </div>
		                <div style={{textAlign:'left', paddingLeft: '10px', paddingBottom: '10px', paddingRight: '10px'}}>
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
						                  	<img id='product-image' src={product.imageURL } style={{maxHeight: '150px', width: 'auto', display:'block', margin:'auto', justifyContent: 'left'}}/>
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
					</Tab>
    				<Tab label="Order History"  style={{backgroundColor: '#EEEEEE', color:'black'}}>
					<div>
					<h4>Order History</h4>
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
					</Tab>
				</Tabs>
				</Paper>
			</div>
			</div>
		)
	}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount)