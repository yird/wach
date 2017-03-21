
const initialState = {
  Authenticated: false,
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type){
    case SET_CURRENT_USER:
      return {...state, Authenticated: true}
      break
    default: return state
  }
  
}
