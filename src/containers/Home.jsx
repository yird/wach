import React from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import { Item } from 'semantic-ui-react'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      all: []
    }
    this.handleAddorDelete = this.handleAddorDelete.bind(this)
    this.getApi = this.getApi.bind(this)
  }

  getApi (id) {
    axios.all(id.map(each => {
      return axios.get(`https://api.themoviedb.org/3/movie/${each.id}?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534`)
          .then(res => {
            return res.data
          })
    })
      ).then(res => {
        this.setState({
          all: res
        })
      })
  }

  handleAddorDelete (id, added) {
    id = {id: id}

    if (!added) {
      axios.put('/api/addFavorite', id)
    } else {
      axios.put('/api/deleteFavorite', id)
    }

    return true
  }

  componentDidMount () {
    document.body.scrollTop = 0
    var apiKey = 'd70794e4c63eb2c23e3e2a0cfeaa9534'
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
        .then((res) => {
          console.log(res)
          if (res) { this.getApi(res.data.results) }
        })
  }

  render () {
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.all.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
        </Item.Group>
      </div>
    )
  }
}
