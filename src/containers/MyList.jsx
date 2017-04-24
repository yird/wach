import React from 'react'
import { connect } from 'react-redux'
import MovieCard from '../components/MovieCard'
import { Item, Loader, Button, Dimmer, Header, Icon } from 'semantic-ui-react'
import { browserRouter as Router } from 'react-router'
import axios from 'axios'
import Login from './Login'
import Signup from './Signup'

class MyList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      mylist: []
    }
    this.getApi = this.getApi.bind(this)
    this.handleHide = this.handleHide.bind(this)
  }

  componentDidMount () {
    document.body.scrollTop = 0
    axios.get('/api/getFavorites')
      .then(res => {
        this.getApi(res.data)
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
          mylist: res.reverse()
        })
      })
  }
  handleHide () {
    this.props.history.push('/')
  }

  render () {
    if (this.props.Store.user.loading) {
      return <Loader active />
    }
    if (!this.props.Store.authenticated) {
      return (
        <Dimmer inverted active onClickOutside={this.handleHide}>
          <Header inverted icon as='h2'>
            <Icon name='lock' />
            You Must be Logged in!
            <Header.Subheader>
              <Button color='blue' content='Ok' onClick={this.handleHide} style={{margin: '2em'}} />
            </Header.Subheader>
          </Header>
        </Dimmer>
      )
    }
    return (
      <div className='container'>
        <Item.Group className='movie-group'>
          {this.state.mylist.map((movie) => {
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

export default connect(mapStateToProps)(MyList)
