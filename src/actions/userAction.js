import axios from 'axios'

export const getUser = () => {
  return dispatch => {
    dispatch({type: 'GET_USER_PENDING'})
    return axios.post('/auth/getuser')
      .then(user => {
        dispatch(setUser(user))
      })
      .catch(res => {
        dispatch({type: 'GET_USER_REJECTED'})
      })
  }
}

const setUser = (user) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}
