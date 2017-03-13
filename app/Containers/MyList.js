import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions/Actions'
import { Item, Loader } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'

const MyList = ({fetchList, data}) => {
  console.log(sessionStorage)
  if(!data.mylist && !data.loading) {
    fetchList(data.user.mylist, 'FETCH_MYLIST')
    return <Loader active />
  }

  if(data.loading) return <Loader active />
  return (
      <div className='container'>
            <Item.Group className='movie-group'>
                {data.mylist.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
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
    fetchList: (mylistIds, type) => {
      dispatch(fetchMovie(mylistIds, type))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyList)
