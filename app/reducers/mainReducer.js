const defaultState = {
  logged: false,
  user: {},
  popular: [],
  mylist: [],
  loading: null,
  error: null
}

const mainReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'FETCH_MOVIE_PENDING':
      return { ...state, loading: true }
      break;
    case 'FETCH_MOVIE_FULFILLED':
      return { ...state, loading: false, mylist:action.payload }
      break;
    case 'FETCH_MOVIE_REJECTED':
      return { ...state, loading: false, error: action.payload }
      break;

    case 'FETCH_POPULAR_PENDING':
      return { ...state, loading: true }
      break;
    case 'FETCH_POPULAR_FULFILLED':
      return { ...state, loading: false, popular: action.payload.data.results }
      break;
    case 'FETCH_POPULAR_REJECTED':
      return { ...state, loading: false, error: action.payload }
      break;
    default: return state
  }
}

export default mainReducer
