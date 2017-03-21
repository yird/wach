
const initialState = {
  Authenticated: false,
  user: {}
}

export default (state = initialState, action) => {
  console.log(action.type)
  switch (action.type){
    case 'SET_CURRENT_USER':
      return {...state, user: action.payload, Authenticated: true}
      break
    default: return state
  }
  
}

