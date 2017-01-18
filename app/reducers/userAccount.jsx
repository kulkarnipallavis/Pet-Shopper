import axios from 'axios'

const initialState = {
	orderHistory : [],
	currentOrder : {}
}

const reducer = (state = initialState, action) => {
	const newState = Object.assign({}, state);

	switch(action.type){
		case SET_ORDER_HISTORY:
			newState.orderHistory = action.orderHistory;
			break;
		case SET_CURRENT_ORDER:
			newState.currentOrder = action.currentOrder;
			break;
	}
	return newState;
}

const SET_ORDER_HISTORY = 'SET_ORDER_HISTORY';
export const setOrderHistory = (orderHistory) => ({
  type: SET_ORDER_HISTORY,
  orderHistory
})

export const getOrderHistory = (userId) => (dispatch) => {
	// axios.get(`/api/order/${id}`)
	axios.get(`/api/orders/${userId}?status='complete'`)
		.then(res=>{
			const orderHistory = res.data
			console.log("orderHistory.....", orderHistory)
			dispatch(setOrderHistory(orderHistory))
		})

}

const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
export const setCurrentOrder = (currentOrder) => ({
  type: SET_CURRENT_ORDER,
  currentOrder
})

export const getCurrentOrder = (userId) => (dispatch) => {
	axios.get(`/api/orders/${userId}?status='active'`)
		.then(res=>{
			const currentOrder = res.data
			console.log("currentOrder.....", currentOrder)
			dispatch(setCurrentOrder(currentOrder))
		})

}

export default reducer;

