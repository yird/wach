import axios from 'axios'
const apiKey = 'd70794e4c63eb2c23e3e2a0cfeaa9534'

export const setInitState = () => {
  return dispatch => {
    // Set logged in user
    dispatch({type: 'GET_USER_PENDING'})
    axios.post('/auth/getuser')
      .then(user => {
        dispatch({
          type: 'SET_USER',
          payload: user
        })
      })
      .catch(res => {
        dispatch({type: 'GET_USER_REJECTED'})
      })
    // Get popular movies
    dispatch({type: 'GET_POPULAR_PENDING'})
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        .then((res) => {
          dispatch({
            type: 'SET_POPULAR',
            payload: res.data.results
          })
        })
      .catch(res => {
        dispatch({type: 'SET_POPULAR_REJECTED'})
      })
  }
}

export const logout = () => {
  axios.post('/auth/logout').then(window.location.replace('/'))
}

export const getPopular = (pageNumber) => {
  console.log('inpop');
  return dispatch => {
    console.log(pageNumber)
     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
        .then((res) => {
          dispatch({
            type: 'SET_POPULAR',
            payload: res.data.results
          })
         document.body.scrollTop = 0 
        })
      .catch(res => {
        dispatch({type: 'SET_POPULAR_REJECTED'})
      }) 
  }
}
