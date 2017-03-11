import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions/Actions'
import { Item } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'
import Trailer from '../components/Trailer'

const MyList = ({fetchMovie, mylist}) => {

  mylist.length === 0 && fetchMovie(mylist)
  return (
      <div className='container'>
            <Item.Group className='movie-group'>
                {mylist.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
            </Item.Group>
      </div>
    )
}



const mapStateToProps = (state) => {
  return {
    mylist: state.mainReducer.mylist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMovie: (mylist) => {
      dispatch(fetchMovie(mylist))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyList)
