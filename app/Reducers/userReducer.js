const defaultState = {
  logged: null,
  user: {},
  mylistIds: [14564,135397,127380,284052, 259316, 341174, 313369],
  loading: null
}

const userReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN_USER_PENDING':
      return { ...state, loading: true}
      break;
    case 'LOGIN_USER_FULFILLED':
      return { ...state, user:{name:hi, email:bye}, loading: false, user: action.payload.data.results }
      break;
    case 'LOGIN_USER_REJECTED':
      return { ...state, error: action.payload.status_message }
      break;
    case 'LOGOUT_USER_FULFILLED':
      return { ...state, error: action.payload.status_message }
      break;
    default: return state
  }
}

export default userReducer
