import React from 'react'
import axios from 'axios'
import { Embed, Button, Modal, Icon } from 'semantic-ui-react'

export default class Trailer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vid: ''
    }
  }
  componentDidMount () {
    var apiKey = 'd70794e4c63eb2c23e3e2a0cfeaa9534'
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.movie.id}/videos?api_key=${apiKey}&language=en-US`)
        .then((res) => {
          var vidId = 'NTzycsqxYJ0'
          if (res.data.results[0]) {
            vidId = res.data.results[0].key
          }
          this.setState({
            vid: vidId
          })
        })
  }

  render () {
    return (
      <Modal trigger={
        <Button basic color='grey' animated='fade'>
          <Button.Content visible>Trailer</Button.Content>
          <Button.Content hidden className='hidden-button'>
            <Icon name='video play' size='large' style={{fontSize: '1.8em'}} />
          </Button.Content>
        </Button>}>
        <Modal.Header style={{textAlign: 'center'}}>{this.props.movie.title}</Modal.Header>
        <Modal.Content>
          <Embed
            active
            autoplay
            id={this.state.vid}
            source='youtube'
          />
        </Modal.Content>
      </Modal>
    )
  }
}
