import axios from 'axios'

const initialState = {
  newProduct: {},
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
const ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';


//ACTIONS
export const addNewProduct = newProduct => ({
  type: ADD_NEW_PRODUCT,
  newProduct
})


//THUNK ACTIONS
export const createNewProduct = (dispatch, getState) => {
  const newProduct = getState().admin.newProduct;
  console.log("inside admin reducer ", newProduct);
  return dispatch =>
    axios.post('/api/products', newProduct)
      .then(response => {
        console.log("successfully made new product"); 
  })
}


export default reducer;