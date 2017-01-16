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
// This is a weird API.
// getAllProducts()
// getAllProducts('category', 2)
export const getAllProducts =
  () => dispatch =>
    axios.get('/api/products')
      .then(response => {
        const allProducts = response.data
        dispatch(setAllProducts(allProducts))
      })

export const getProductsInCategory =
  categoryId => dispatch =>
    axios.get(`/api/categories/${categoryId}`)
      .then(response => {
        const allProducts = response.data
        dispatch(setAllProducts(allProducts))
      })

export const getSelectedProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(response => {
        const selectedProduct = response.data
        dispatch(setSelectedProduct(selectedProduct))
})


export default reducer;