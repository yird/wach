
const defaultState = {
  fetching: null,
  logged: false,
  popular: {
    loading: null,
    movies: null
  },
  mylist: {
    loading: null,
    movies: null
  },
  user: {
    name: '',
    email: '',
    mylist: null,
    loved: [],
    watched: []
  },
  loading: null,
  error: null
}

const mainReducer = (state = defaultState, action) => {

  switch (action.type) {

    //INIT
    case 'FETCH_INIT_PENDING':
      return { ...state, fetching:true}
      break;
    case 'FETCH_INIT_FULFILLED':
      return { ...state, fetching: false, logged: true, user: action.payload }
      break;
    case 'FETCH_INIT_REJECTED':
      return { ...state,  fetching:false, error: true }
      break;
  // POPULAR
      case 'FETCH_POPULAR_PENDING':
        return { ...state, popular: {...state.popular, loading: true } }
        break;
      case 'FETCH_POPULAR_FULFILLED':
        return { ...state, popular:{...state.popular, movies:action.payload, loading: false } }
        break;
      case 'FETCH_POPULAR_REJECTED':
        return { ...state, popular:{...state.popular, loading: false } }
        break;
    // MYLIST
        case 'FETCH_MYLIST_PENDING':
          return { ...state, mylist:{...state.mylist, loading:true }}
          break;
        case 'FETCH_MYLIST_FULFILLED':
          return { ...state, loading:false, mylist:{...state.mylist, movies:action.payload, loading:false } }
          break;
        case 'FETCH_MYLIST_REJECTED':
          return { ...state, mylist:{...state.mylist, loading:false } }
          break;
  // LOGIN
      case 'LOGIN_USER_PENDING':
        return { ...state, user:{...state.user, loading: true } }
        break;
      case 'LOGIN_USER_FULFILLED':
        return { ...state, logged: true, error: false, user:{...action.payload, loading: false} }
        break;
      case 'LOGIN_USER_REJECTED':
        return { ...state, user:{...state.user, error: true, loading: false } }
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
