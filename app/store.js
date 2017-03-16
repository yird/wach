import {createStore, combineReducers, applyMiddleware} from 'redux'
import mainReducer from './reducers/mainReducer'
import userReducer from './reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'
import { getInitState } from './actions/Actions'


const store = createStore(
    combineReducers({mainReducer, userReducer}),
    composeWithDevTools( applyMiddleware(promise(), logger()) )
)
store.dispatch(getInitState())

export default store
