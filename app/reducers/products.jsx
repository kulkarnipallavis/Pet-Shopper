import axios from 'axios'

const initialState = {
  allProducts: [],
  listProducts: [],
  selectedProduct: {}
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
  case SET_ALL_PRODUCTS:
    newState.allProducts = action.allProducts;
    break;
  case SET_LIST_PRODUCTS:
    newState.listProducts = action.products;
    break;
  case SET_SINGLE_PRODUCT:
    newState.selectedProduct = action.selectedProduct;
  }
  return newState;
}

//CONSTANTS
const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';
const SET_LIST_PRODUCTS = 'SET_LIST_PRODUCTS';
const SET_SINGLE_PRODUCT = 'SET_SINGLE_PRODUCT';
const ADD_TO_CART = 'ADD_TO_CART';

//ACTIONS
export const setAllProducts = allProducts => ({
  type: SET_ALL_PRODUCTS,
  allProducts
})

export const setListProducts = products => ({
  type: SET_LIST_PRODUCTS,
  products
})

export const setSelectedProduct = selectedProduct => ({
  type: SET_SINGLE_PRODUCT,
  selectedProduct
})

//THUNK ACTIONS
export const getAllProducts = () => {
  return dispatch =>
    axios.get('/api/products')
      .then(response => {
        const allProducts = response.data
        dispatch(setAllProducts(allProducts))
  })
}

export const getListProducts = (name = undefined, tags = undefined, category = undefined) => {
  if (category !== undefined) return dispatch =>
    axios.get(`/api/categories/${category}`)
      .then(response => {
        const products = response.data
        dispatch(setListProducts(products))
  })
  else if (name !== undefined) return dispatch =>
    axios.get(`/api/products?name=${name}`)
      .then(response => {
        const products = response.data
        dispatch(setListProducts(products))
  })
  else if (tags !== undefined) return dispatch =>
    axios.get(`/api/products?tags=${tags}`)
      .then(response => {
        const products = response.data
        dispatch(setListProducts(products))
  })
  else if (!category && !name && !tags) {
    return (dispatch, getStore) => {
      const products = getStore().products.allProducts;
      dispatch(setListProducts(products));
    }
  }
}

export const getSelectedProduct = (id) =>
  dispatch =>
    axios.get(`/api/products/${id}`)
      .then(response => {
        const selectedProduct = response.data
        dispatch(setSelectedProduct(selectedProduct))
})


export default reducer;