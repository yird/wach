
const defaultState = {
}

const mainReducer = (state = defaultState, action) => {

  switch (action.type) {
  // POPULAR
      case 'FETCH_POPULAR_PENDING':
        return { ...state, loading: true }
        break;
      case 'FETCH_POPULAR_FULFILLED':
        return { ...state, loading: false, popular: action.payload.data.results }
        break;
      case 'FETCH_POPULAR_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;
  // LOGIN
      case 'LOGIN_USER_PENDING':
        return { ...state, user:{...state.user, loading: true } }
        break;
      case 'LOGIN_USER_FULFILLED':
        return { ...state, logged: true, user:{...action.payload, loading: false} }
        break;
      case 'LOGIN_USER_REJECTED':
        return { ...state, user:{...state.user, error: true, loading: false } }
        break;
  // MYLIST
      case 'FETCH_MYLIST_PENDING':
        return { ...state, loading:true}
        break;
      case 'FETCH_MYLIST_FULFILLED':
        return { ...state, loading:false, mylist:action.payload }
        break;
      case 'FETCH_MYLIST_REJECTED':
        return { ...state, loading:false, error: action.payload }
        break;
  // LOVED
      case 'FETCH_LOVED_PENDING':
        return { ...state, loading: true }
        break;
      case 'FETCH_LOVED_FULFILLED':
        return { ...state, loading: false, loved:action.payload }
        break;
      case 'FETCH_LOVED_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;
  // WATCHED
      case 'FETCH_WATCHED_PENDING':
        return { ...state, loading: true }
        break;
      case 'FETCH_WATCHED_FULFILLED':
        return { ...state, loading: false, watched:action.payload }
        break;
      case 'FETCH_WATCHED_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;

    // ADD TO MYLIST
      case 'ADD_MYLIST_PENDING':
        return { ...state, loading: true }
        break;
      case 'ADD_MYLIST_FULFILLED':
        return { ...state, loading: false, user:{...state.user, mylist:action.payload } }
        break;
      case 'ADD_MYLIST_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;

    // ADD TO LOVED
      case 'ADD_LOVED_PENDING':
        return { ...state, loading: true }
        break;
      case 'ADD_LOVED_FULFILLED':
        return { ...state, loading: false, user:{...state.user, loved:action.payload } }
        break;
      case 'ADD_LOVED_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;

      case 'ADD_WATCHED_PENDING':
        return { ...state, loading: true }
        break;
      case 'ADD_WATCHED_FULFILLED':
        return { ...state, loading: false, user:{...state.user, watched:action.payload } }
        break;
      case 'ADD_WATCHED_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;
        //IS LOGGED?
      case 'IS_LOGGED_PENDING':
        return { ...state, loading: true }
        break;
      case 'IS_LOGGED_FULFILLED':
        return { ...state, loading: false, logged: action.payload }
        break;
      case 'IS_LOGGED_REJECTED':
        return { ...state, loading: false, error: action.payload }
        break;

      default: return state
  }
}

export default mainReducer
