import React from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../actions/Actions'
import { Item, Loader } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'

class MyList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: null
    }
  }
  componentWillReceiveProps(nextProps){
    let data = nextProps.data
    console.log('receiving...')
    console.log(data)
    if(!data.mylist.movies){
      this.props.fetchList(data.user.mylist.movies, 'FETCH_MYLIST')
    }
    this.setState({
      movies: data.mylist.movies
    })
  }
  render(){
    console.log(this.state.movies)
    if(this.state.movie){
      return (
          <div className='container'>
            {console.log('5')}
                <Item.Group className='movie-group'>
                    {data.mylist.movies.map( movie => <MovieCard key={movie.id} movie={movie}/>)}
                </Item.Group>
          </div>
        )
    } else return <Loader active />
  }
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
