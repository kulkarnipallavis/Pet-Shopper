import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products').default, 
  cart: require('./cart').default,
  categories : require('./categories').default,
  userAccount : require('./userAccount').default
})

export default rootReducer
