import axios from 'axios'

const api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534';

export const fetchPopular = () => {
    return {
        type: 'FETCH_POPULAR',
        payload: axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    }
}

export const fetchMovie = (movies, kind) => {
    return {
        type: 'FETCH_MYLIST',
        payload: axios.all(movies.map(each => {
            return axios.get(`https://api.themoviedb.org/3/movie/${each}?api_key=${api_key}`)
                .then(response => {
                    return response.data
                })
        }))
    }
}

export const addToMyList = (movie) => {
  return {
    type: 'ADD_TO_MYLIST',
    payload: movie
  }
}

export const loginUser = (userInfo) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post('/api/loginUser', userInfo)
        .then(response => {
            return response.data
        })
    }
}
export const isLogged = () => {
    return {
        type: 'IS_LOGGED',
        payload: axios.post('/api/islogged')
        .then(response => {
            return response.data
        })
    }
}
