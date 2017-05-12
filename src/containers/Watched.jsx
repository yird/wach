import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { Item, Loader } from 'semantic-ui-react'
import axios from 'axios'
import NoAuth from '../components/NoAuth'

class Watched extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      watched: []
    }
    this.getApi = this.getApi.bind(this)
  }

  componentDidMount () {
    document.body.scrollTop = 0
    axios.get('/api/getUserMovies')
      .then(res => {
        this.getApi(res.data.watched)
      })
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
          watched: res.reverse()
        })
      })
  }
  render () {
    if (this.props.Store.user.loading) {
      return <Loader active />
    }
    if (!this.props.Store.authenticated) {
      return <NoAuth history={this.props.history} />
    }
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.watched.map((movie) => {
            return (
              <MovieCard key={movie.id} movie={movie} />
            )
          })}
        </Item.Group>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Store: state.userReducer
  }
}

export default connect(mapStateToProps)(Watched)
