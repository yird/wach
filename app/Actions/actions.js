import axios from 'axios'

const api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534';

export const fetchPopular = () => {
    return {
        type: 'FETCH_POPULAR',
        payload: axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    }
}

export const fetchMovie = (mylist) => {
    mylist = [14564,135397,127380,284052,259316]
    return {
        type: 'FETCH_MOVIE',
        payload: axios.all(mylist.map(each => {
            return axios.get(`https://api.themoviedb.org/3/movie/${each}?api_key=${api_key}`)
                .then(response => {
                    return response.data
                })
        }))
    }
}

export const loginUser = (userInfo) => {
    return {
        type: 'LOGIN_USER',
        payload: axios.post('/api/loginUser')
          .then(response => {
            return response
          })
    }
}

export const addToMyList = (id) => {
    return {
        type: 'ADD_TO_MYLIST',
        payload: id
    }
}
