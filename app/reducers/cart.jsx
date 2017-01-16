import axios from 'axios';

const initialState = {
	products : [],
	status : "active",
	orderTotal : 0
}

const reducer = (state=initialState, action) => {
	const newState = Object.assign({}, state)

	switch(action.type) {
		case GET_ORDER:
			newState.products = action.products;
			break;
		case UPDATE_ORDER:
			newState.products = action.products;
			break;
		case UPDATE_TOTAL:
			newState.orderTotal = action.orderTotal;
			break;
	}
	return newState
}

const GET_ORDER = 'GET_ORDER'
export const getOrder = (products) => ({
	type: GET_ORDER,
	products
})

const UPDATE_ORDER = 'UPDATE_ORDER'
export const updateOrder = (products) => ({
	type: UPDATE_ORDER,
	products
})

const UPDATE_TOTAL = 'UPDATE_TOTAL'
export const updateTotal = (orderTotal) => ({
	type : UPDATE_TOTAL,
	orderTotal
})

export const fetchOrder = () => dispatch => {
	axios.get('/api/order')
	.then(response => {
		const products = response.data[products]
		dispatch(getOrder(products))
	})
}

export const addToOrder = product => (dispatch, getState) => {
	const products = [...getState().products, product];
	const total = getState().orderTotal + product.price;
	axios.post('/api/order', product, total)
	.then(response => {
		const products = response.data[products]
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export const deleteFromOrder = (product) => (dispatch, getState) => {
	const total = getState().orderTotal - product.price;
	axios.post('/api/order', product, total)
	.then(response => {
		const products = response.data[products]
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export default reducer;
