const defaultState = {
  movies: [],
  mylist: [],
  videoId: '',
  loading: null,
  error: null
}

const movieReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'FETCH_MOVIE_PENDING':
      return { ...state, loading: true}
      break;
    case 'FETCH_MOVIE_FULFILLED':
      return { ...state, mylist: action.payload, loading: false}
      break;
    case 'FETCH_MOVIE_REJECTED':
      return { ...state, error: action.payload.status_message }
      break;

    case 'FETCH_POPULAR_PENDING':
      return { ...state, loading: true}
      break;
    case 'FETCH_POPULAR_FULFILLED':
      return { ...state, loading: false, movies: action.payload.data.results }
      break;
    case 'FETCH_POPULAR_REJECTED':
      return { ...state, error: action.payload.status_message }
      break;

    case 'FETCH_TRAILER_FULFILLED':
      return { ...state, videoId: action.payload.data.results[0].key }
      break;
    default: return state
  }
}

export default movieReducer
