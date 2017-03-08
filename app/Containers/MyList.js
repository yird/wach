import { connect } from 'react-redux'
import MyList from '../Components/MyList'
import { fetchMovie, fetchPopular, playTrailer} from '../Actions/actions'


const mapStateToProps = (state) => {
  return {
    mylistIds: state.userReducer.mylistIds,
    movieData: state.movieReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {
      dispatch(fetchPopular())
    },
    fetchMovie: (mylistIds) => {
      dispatch(fetchMovie(mylistIds))
    },
    playTrailer: (id) => {
      dispatch(playTrailer(id))
    }
  }
}

const MyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyList)

export default MyListContainer
