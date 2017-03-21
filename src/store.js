import React from 'react'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import decode from 'jwt-decode'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import { setUser } from './actions/authActions'
import { setAuthToken } from '../utils/auth'


const store = createStore(
  combineReducers({userReducer}),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk,logger())
)

if(localStorage.getItem('jwtToken')){
  setAuthToken(localStorage.getItem('jwtToken'))
  store.dispatch(setUser(decode(localStorage.getItem('jwtToken'))))
}

export default store
