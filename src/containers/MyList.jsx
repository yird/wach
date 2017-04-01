import React from 'react'
import MovieCard from '../components/MovieCard'
import { Item } from 'semantic-ui-react'
import axios from 'axios'

export default class MyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      favorites: []
    }
    this.getApi = this.getApi.bind(this)
    this.handleAddorDelete = this.handleAddorDelete.bind(this)
  }

  getApi (id) {
    axios.all(id.map(each => {
      return axios.get(`https://api.themoviedb.org/3/movie/${each}?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534`)
          .then(res => {
            return res.data
          })
    })
      ).then(res => {
        this.setState({
          favorites: res.reverse()
        })
      })
  }

  componentDidMount () {
    document.body.scrollTop = 0
    axios.get('/api/getFavorites')
      .then(res => {
        console.log(res)
        this.getApi(res.data)
      })
  }

  handleAddorDelete (id, status) {
    id = {id: id}

    if (!status) {
      axios.put('/api/addFavorite', id)
        .then(
          axios.get('/api/getFavorites')
          .then(res => {
            this.getApi(res.data)
          })
        )
    } else {
      axios.put('/api/deleteFavorite', id)
          .then(
            axios.get('/api/getFavorites')
            .then(res => {
              this.getApi(res.data)
            })
          )
    }
    return true
  }

  render () {
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.favorites.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
        </Item.Group>
      </div>
    )
  }
}
