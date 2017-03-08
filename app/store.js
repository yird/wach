import {createStore, combineReducers, applyMiddleware} from 'redux'
import movieReducer from './Reducers/movieReducer'
import userReducer from './Reducers/userReducer'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'


export default createStore(
    combineReducers({movieReducer, userReducer}),
    applyMiddleware(promise(), logger())
)
