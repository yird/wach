import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Item, Popup, Button, Icon} from 'semantic-ui-react'

class CardExtras extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isMylist: null,
      isLoved: null,
      isWatched: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    if (this.props.Authenticated) {
      axios.get('/api/getUserMovies')
    .then(res => {
      var isMylist = res.data.mylist.includes(this.props.id)
      var isLoved = res.data.loved.includes(this.props.id)
      var isWatched = res.data.watched.includes(this.props.id)
      this.setState({
        isMylist,
        isLoved,
        isWatched
      })
    })
    }
  }

  handleClick (e, {name}) {
    if (this.props.Authenticated) {
      if (name === 'mylist') {
        !this.state.isMylist ? (axios.put('/api/addMovie', {type: name, id: this.props.id}))
          : (axios.put('/api/deleteMovie', {type: name, id: this.props.id}))
        this.setState({isMylist: !this.state.isMylist})
      }
      if (name === 'loved') {
        !this.state.isLoved ? (axios.put('/api/addMovie', {type: name, id: this.props.id}))
          : (axios.put('/api/deleteMovie', {type: name, id: this.props.id}))
        this.setState({isLoved: !this.state.isLoved})
      }
      if (name === 'watched') {
        !this.state.isWatched ? (axios.put('/api/addMovie', {type: name, id: this.props.id}))
          : (axios.put('/api/deleteMovie', {type: name, id: this.props.id}))
        this.setState({isWatched: !this.state.isWatched})
      }
    }
  }

  render () {
    return (
      <Item.Content className='extra-card'>
        {this.state.isMylist ? (
          <Popup
            trigger={<span><Button name='mylist' basic onClick={this.handleClick}> <Icon color='red' className='extra-icons' name='remove' /></Button></span>}
            content='Remove from My List'
          />
        )
          : <Popup
            trigger={<span><Button name='mylist' basic onClick={this.handleClick}><Icon className='extra-icons' name='add' /> </Button></span>}
            content='Add to My List'
          />
        }
        {this.state.isLoved ? (
          <Popup
            trigger={<span><Button name='loved' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='heart' /></Button></span>}
            content='Remove from Loved'
          />
        )
          : <Popup
            trigger={<span><Button name='loved' basic onClick={this.handleClick}><Icon className='extra-icons' name='heart' /></Button></span>}
            content='Add to Loved'
          />
        }
        {this.state.isWatched ? (
          <Popup
            trigger={<span><Button name='watched' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='desktop' /></Button></span>}
            content='Remove from Watched'
          />
        )
          : <Popup
            trigger={<span><Button name='watched' basic onClick={this.handleClick}><Icon className='extra-icons' name='desktop' /></Button></span>}
            content='Watched'
          />
        }
      </Item.Content>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Authenticated: state.userReducer.authenticated
  }
}

export default connect(mapStateToProps)(CardExtras)
