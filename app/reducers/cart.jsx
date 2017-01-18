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
			return newState;
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

//action-dispatchers

export const fetchOrder = () => (dispatch, getState) => {
	axios.get('/api/orders')
	.then(response => {
		const products = response.data.products
		const total = (response.data.total) ? response.data.total : 0;
		dispatch(setOrder(products))
		dispatch(updateTotal(total))
	})
}

export const addToOrder = product => (dispatch, getState) => {
	let orderTotal = Number(getState().cart.orderTotal)
	const total = orderTotal ? orderTotal + Number(product.price) : Number(product.price)
	axios.post('/api/orders', {"product": {"id": product.id}, "total": total})
	.then(response => {
		const products = response.data.products
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export const deleteFromOrder = (product) => (dispatch, getState) => {
	const orderTotal = Number(getState().cart.orderTotal) - Number(product.price);
	const total = (orderTotal >= 0) ? orderTotal : 0;
	axios.post('/api/orders/delete', {"product": {"id" : product.id, "total": total}})
	.then(response => {
		const products = response.data.products
		dispatch(updateOrder(products))
		dispatch(updateTotal(total))
	})
}

export const completeOrder = () => (dispatch, getState) => {
	axios.post('/api/orders/done')
	.then(response => {
		dispatch(updateOrder([]))
		dispatch(updateTotal(0.00))
	})
}

export default reducer;
