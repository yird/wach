import React from 'react'
import { connect } from 'react-redux'
import { fetchPopular, playTrailer} from '../actions/Actions'
import MovieCard from '../components/MovieCard'
import {Item, Loader} from 'semantic-ui-react'

const Home = ({data, fetchPopular}) => {
    console.log(data.popular)
    if(data.fetching || data.popular.loading) return (<Loader active />)

    if(!data.popular.movies && !data.popular.loading){
      setTimeout(function(){ fetchPopular() }, 10);
      return (<Loader active />)
    }
    return (
        <div className='container'>
            <Item.Group className='movie-group'>
                {data.popular.movies.map(function(movie) {
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
    data: state.mainReducer
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
