import { connect } from 'react-redux'
import Home from '../Components/Home'
import { fetchPopular, playTrailer} from '../Actions/actions'


const mapStateToProps = (state) => {
  return {
    movieData: state.movieReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {
      dispatch(fetchPopular())
    },
    playTrailer: (id) => {
      dispatch(playTrailer(id))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)

export default HomeContainer
