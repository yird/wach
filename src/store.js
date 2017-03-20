import React from 'react'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware, combineReducers} from 'redux'
import authReducer from './reducers/authReducer'
import { login } from './actions/authActions'

const store = createStore(
  combineReducers({authReducer}),
  applyMiddleware(thunk,logger())
)

store.dispatch(login({name:'hi',pass:'pass'}))

export default store
