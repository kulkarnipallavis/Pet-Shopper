import axios from 'axios'

const initialState = {
  allProducts: [],
  selectedProduct: {}
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
  case SET_ALL_PRODUCTS:
    newState.allProducts = action.allProducts;
    break;
  case SET_SINGLE_PRODUCT:
    newState.selectedProduct = action.selectedProduct;
  }
  return newState;
}

//CONSTANTS
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';

//ACTIONS
export const setAllProducts = allProducts => ({
  type: SET_ALL_PRODUCTS,
  allProducts
})

export const setSelectedProduct = selectedProduct => ({
  type: SET_SINGLE_PRODUCT,
  selectedProduct
})

//THUNK ACTIONS
export const getAllProducts = (type, info) => {
  if (!type) return dispatch =>
    axios.get('/api/products')
      .then(response => {
        const allProducts = response.data
        dispatch(setAllProducts(allProducts))
  })
  if (type === 'category') return dispatch =>
    axios.get(`/api/categories/${info}`)
      .then(response => {
        const allProducts = response.data
        dispatch(setAllProducts(allProducts))
  })
}

export const getSelectedProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(response => {
        console.log(response.data)
        const selectedProduct = response.data
        dispatch(setSelectedProduct(selectedProduct))
})


export default reducer;