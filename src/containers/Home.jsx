import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { Item, Loader, Label } from 'semantic-ui-react'
import { getPopular } from '../actions/userActions'

const Home = ({Store,pageChange}) => {
  if (Store.popular.loading || Store.user.loading) return <Loader active />
  return (
    <div className='container'>
      <Item.Group className='movie-group'>
        {Store.popular.movies.map((movie) => {
          return (<MovieCard key={movie.id} movie={movie} />)
        })}
      </Item.Group>
        <Label.Group circular className='bottom-pages'>
          <Label onClick={() => pageChange(1)} as='a'>1</Label>
          <Label onClick={() => pageChange(2)} as='a'>2</Label>
          <Label onClick={() => pageChange(3)} as='a'>3</Label>
          <Label onClick={() => pageChange(4)} as='a'>4</Label>
          <Label onClick={() => pageChange(5)} as='a'>5</Label>
          <Label onClick={() => pageChange(6)} as='a'>6</Label>
       </Label.Group>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    Store: state.userReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    pageChange: (pageNumber) => {
      dispatch(getPopular(pageNumber))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
