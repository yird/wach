import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import userReducer from './reducers/userReducer'
import thunk from 'redux-thunk'
import { setInitState } from './actions/userActions'

const store = createStore(
  combineReducers({userReducer}),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

store.dispatch(setInitState())

export default store
