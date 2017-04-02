import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { Item, Loader } from 'semantic-ui-react'

const Home = ({Popular}) => {
  if(Popular.loading) return <Loader active /> 
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {Popular.movies.map((movie) => {
            return (<MovieCard key={movie.id} movie={movie} />)
          })}
        </Item.Group>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    Popular: state.userReducer.popular
  }
}

export default connect(mapStateToProps)(Home)
