import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { Item, Loader } from 'semantic-ui-react'

const Home = ({Store}) => {
  if (Store.popular.loading || Store.user.loading) return <Loader active />
  return (
    <div className='container'>
      <Item.Group className='movie-group'>
        {Store.popular.movies.map((movie) => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Item.Group>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Store: state.userReducer
  }
}

export default connect(mapStateToProps)(Home)
