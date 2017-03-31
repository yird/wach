import axios from 'axios'

export const getUser = () => {
  return dispatch => {
   return axios.post('/auth/getuser')
      .then(user => {
        dispatch(setUser(user))
      })
  }
}

const setUser = (user) => {
   return {
     type: 'SET_USER',
     payload: user
   }
}
