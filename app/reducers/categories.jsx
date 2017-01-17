import axios from 'axios'

const initialState ={
	categories : []
}

const reducer = (state = initialState, action) => {
	const newState = Object.assign({}, state)

	switch(action.type){
		case SET_CATEGORIES :
			newState.categories = action.categories;
			break;
	}
	return newState;
}

const SET_CATEGORIES = 'SET_CATEGORIES'

export const setCategories = (categories) => ({
	type : SET_CATEGORIES,
	categories
})

export const getCategories = () => (dispatch) => {
	axios.get('/api/categories')
	.then(response => {
		const categories = response.data
		dispatch(setCategories(categories))
	})
}

export default reducer;