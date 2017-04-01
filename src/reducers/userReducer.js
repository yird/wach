const initState = {
  authenticated: false,
  user: {}
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'GET_USER_PENDING':
      return { ...state, authenticated: false, user: { loading: true } }
    case 'SET_USER':
      return { ...state, authenticated: true, user: action.payload.data }
    case 'GET_USER_REJECTED':
      return { ...state, authenticated: false, user: { loading: false } }
    default: return state
  }
}
