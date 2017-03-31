import React from 'react'
import { Label, Item } from 'semantic-ui-react'
import axios from 'axios'
import Trailer from './Trailer'
import CardExtras from './CardExtras'

export default class MovieCard extends React.Component {
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
    var api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534'
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then((res) => {
          if (res) { this.getApi(res.data.results) }
        })
  }

  render () {
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.all.map(function (res) {
            return (
              <Item key={res.id} className='movie-card'>
                <Item.Image src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                <Item.Content>
                  <Item.Header as='a'>{res.title}</Item.Header>
                  <Item.Meta>
                    <Label>{res.release_date}</Label>
                    <Label>{res.genres[0].name}</Label>
                  </Item.Meta>
                  <Item.Description>{res.overview}</Item.Description>
                  <Item.Extra>Additional Details</Item.Extra>
                  <Trailer id={res} />
                </Item.Content>
                <CardExtras handleAddorDelete={this.handleAddorDelete} id={res.id} />
              </Item>
            )
          }, this)}
        </Item.Group>
      </div>
    )
  }
}
