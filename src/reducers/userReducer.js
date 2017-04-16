const initState = {
  authenticated: false,
  user: {},
  popular: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return { ...state, authenticated: false, user: { loading: true } }
    case 'SET_USER':
      return { ...state, authenticated: true, user: action.payload.data }
    case 'GET_USER_REJECTED':
      return { ...state, authenticated: false, user: { loading: false } }

    case 'GET_POPULAR_PENDING':
      return { ...state, popular: { loading: true } }
    case 'SET_POPULAR':
      return { ...state, popular: {...state.popular, movies: action.payload, loading: false} }
    case 'GET_POPULAR_REJECTED':
      return { ...state, popular: { loading: false } }
    default: return state
  }
}
