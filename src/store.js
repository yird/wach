import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({userReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
export default store
