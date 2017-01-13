import axios from 'axios';

const initialState = {
	products : [],
	status : "active",
	orderTotal : 0
}

//reducer
const reducer = (state=initialState, action) => {
	const newState = Object.assign({}, state)

	switch(action.type) {
		case GET_ORDER:
			newState.products = action.products;
			break;
		case UPDATE_ORDER:
			newState.products = action.products;
			newState.orderTotal = action.orderTotal
			break;
	}
	return newState
}
//action creators

const GET_ORDER = 'GET_ORDER'
export const getOrder = (products) => ({
	type: GET_ORDER,
	products
})

const UPDATE_ORDER = 'UPDATE_ORDER'
export const updateOrder = (products) => ({
	type: UPDATE_ORDER,
	products,
	orderTotal: calculateOrder(products)
})

//dispatchers
export const fetchOrder = () => dispatch => {
	axios.get('/api/order')
	.then(response => {
		const products = response.data
		dispatch(getOrder(products))
	})
}

export const addToOrder = product => dispatch => {
	axios.post('/api/order', product)
	.then(response => {
		const products = response.data
		dispatch(updateOrder(products))
	})
}

export const deleteFromOrder = productId => dispatch => {
	axios.delete('/api/order', productId)
	.then(response => {
		const products = response.data
		dispatch(updateOrder(products))
	})
}

//function for calculating total price 
const calculateTotal = (products) => {
	let sum;
	products.forEach((product) => {
		return sum += product.price
	})
	return sum;
}


