import axios from 'axios';

const initialState = {
	products : [],
	status : "active",
	orderTotal : 0
}

const reducer = (state=initialState, action) => {
	const newState = Object.assign({}, state)

	switch(action.type) {
		case SET_ORDER:
			newState.products = action.products;
			break;
		case UPDATE_ORDER:
			newState.products = action.products;
			break;
		case UPDATE_TOTAL:
			newState.orderTotal = action.orderTotal;
			break;
		default:
			return state;
	}
	return newState
}

const SET_ORDER = 'SET_ORDER'
export const setOrder = products => ({
	type: SET_ORDER,
	products
})

const UPDATE_ORDER = 'UPDATE_ORDER'
export const updateOrder = products => ({
	type: UPDATE_ORDER,
	products
})

const UPDATE_TOTAL = 'UPDATE_TOTAL'
export const updateTotal = orderTotal => ({
	type : UPDATE_TOTAL,
	orderTotal
})

export const fetchOrder = () => dispatch => {
	axios.get('/api/orders')
	.then(response => {
		const products = response.data
		dispatch(setOrder(products))
	})
}

export const addToOrder = product => (dispatch, getState) => {
	const total = Number(getState().cart.orderTotal) + Number(product.price);
	axios.post('/api/orders', {product: {id: product.id, total: total}})
	.then(response => {
		const products = response.data
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export const deleteFromOrder = (product) => (dispatch, getState) => {
	const total = Number(getState().cart.orderTotal) - Number(product.price);
	axios.post('/api/orders/delete', {product: {id : product.id, total: total}})
	.then(response => {
		const products = response.data
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export default reducer;
