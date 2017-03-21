import axios from 'axios'
import decode from 'jwt-decode'  
import { setAuthToken } from '../../utils/auth.js'

export function setUser(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}


export function loginUser(data) {
  return dispatch => {
    return axios.post('/api/auth/login', data)
      .then(res => {
        const token = res.data.token
        localStorage.setItem('jwtToken', token ) 
        setAuthToken(token)
        dispatch(setUser(decode(token)))
      })
  }
}
