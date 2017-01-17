import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default, 
  orders : require('./userAccount').default,
})

export default rootReducer
