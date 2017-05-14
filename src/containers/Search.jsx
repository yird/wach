import React from 'react'
import axios from 'axios'
import { Loader, Item } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'

export default class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      results: null
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch (search) {
    let query = search.slice(3, search.length).trim()
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534&language=en-US&query=${query}`)
        .then((res) => {
          this.setState({
            results: res.data.results
          })
        })
  }
  componentDidMount () {
    let search = this.props.location.search
    this.updateSearch(search)
  }
  componentWillReceiveProps (nextProps) {
    let search = nextProps.location.search
    this.updateSearch(search)
  }
  render () {
    if (!this.state.results) {
      return (<Loader active />)
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
