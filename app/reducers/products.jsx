import axios from 'axios'

const initialState = {
  products: [],
  selectedProduct: {}
}

const reducer = (state=initialState, action) => {
  const newState = Object.assign({}, state);
  switch(action.type) {
  case SET_PRODUCTS:
    newState.products = action.products;
    break;
  case SET_PRODUCT:
    newState.selectedProduct = action.product;
  }
  return newState;
}

const SET_PRODUCTS = 'SET_PRODUCTS'
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

const SET_PRODUCT = 'SET_PRODUCT'
export const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

export const getProducts = (specification) => {
  dispatch =>
    axios.get('/api/products',
      specification)
      .then((res) => dispatch(setProducts(res.data)));
}

export const getProduct = (id) => {
  dispatch =>
    axios.get(`/api/product/${id}`,
      specification)
      .then((res) => dispatch(setProduct(res.data)));
}

export default reducer;