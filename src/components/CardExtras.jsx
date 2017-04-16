import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {Item, Button, Icon} from 'semantic-ui-react'

class CardExtras extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: this.props.id,
      added: null,
      loved: null,
      watched: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    if(this.props.Authenticated) {
    axios.get('/api/getFavorites')
    .then(res => {
      var isValue = res.data.includes(this.state.id)
      this.setState({
        added: isValue
      })
    })
    }
  }

  handleClick (e, {name}) {
    if (name === 'add') {
      let done = this.props.handleAddorDelete(this.state.id, this.state.added)
      if (done) {
        this.setState({
          added: !this.state.added
        })
      }
    }
    if (name === 'love') {
      this.setState({
        loved: !this.state.loved
      })
    }
    if (name === 'watched') {
      this.setState({
        watched: !this.state.watched
      })
    }
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
    let add = <Button name='add' basic onClick={this.handleClick}><Icon className='extra-icons' name='add' /></Button>
    let love = <Button name='love' basic onClick={this.handleClick}><Icon className='extra-icons' name='heart' /></Button>
    let watched = <Button name='watched' basic onClick={this.handleClick}><Icon className='extra-icons' name='desktop' /></Button>

    if (this.state.added) {
      add = <Button name='add' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='remove' /></Button>
    }
    if (this.state.loved) {
      love = <Button name='love' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='heart' /></Button>
    }
    if (this.state.watched) {
      watched = <Button name='watched' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='desktop' /></Button>
    }
    return (
      <Item.Content className='extra-card'>
        {add}
        {love}
        {watched}
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
