import {createStore, combineReducers, applyMiddleware} from 'redux'
import mainReducer from './Reducers/mainReducer'
import userReducer from './Reducers/userReducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'


export default createStore(
    combineReducers({mainReducer, userReducer}),
    composeWithDevTools( applyMiddleware(promise(), logger()) )
)
