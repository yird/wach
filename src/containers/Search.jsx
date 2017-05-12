import React from 'react'
import axios from 'axios'
import { Loader, Input, Item } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'

export default class Trailer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: null
    }
  }
    componentDidMount () {
      console.log('did mount')
    var apiKey = 'd70794e4c63eb2c23e3e2a0cfeaa9534'
    var query = this.props.location.search
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534&language=en-US&query=${query}`)
        .then((res) => {
          console.log(res)
          this.setState({
            results: res.data.results
          })
        })
  }

  render () {
    console.log(this.props)
   console.log(this.state)
       if(this.state.results === null){
        return(<Loader active />)
      }
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.results.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
        </Item.Group>
      </div>
  )
}
}
