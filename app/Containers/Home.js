import React from 'react'
import { connect } from 'react-redux'
import { fetchPopular, playTrailer} from '../actions/Actions'
import MovieCard from '../components/MovieCard'
import {Item} from 'semantic-ui-react'

const Home = ({popular, fetchPopular}) => {

  popular.length === 0 && fetchPopular()
  return (
      <div className='container'>
          <Item.Group className='movie-group'>
              {popular.map(function(movie) {
                  return (
                      <MovieCard key={movie.id} movie={movie} />
                  )
              })}
          </Item.Group>
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    popular: state.mainReducer.popular
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPopular: () => {
      dispatch(fetchPopular())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
