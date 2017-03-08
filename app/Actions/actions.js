import axios from 'axios'

const api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534';

export const fetchPopular = () => {
    return {
        type: 'FETCH_POPULAR',
        payload: axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
    }
}

export const fetchMovie = (mylistIds) => {
    return {
        type: 'FETCH_MOVIE',
        payload: axios.all(mylistIds.map(each => {
            return axios.get(`https://api.themoviedb.org/3/movie/${each}?api_key=${api_key}`)
                .then(response => {
                    return response.data
                })
        }))
    }
}

export const playTrailer = (id) => {
    return {
        type: 'FETCH_TRAILER',
        payload: axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}`)
    }
}

export const addToMyList = (id) => {
    return {
        type: 'ADD_TO_MYLIST',
        payload: id
    }
}
