import React from 'react'
import axios from 'axios'
import { Embed, Button, Modal, Icon} from 'semantic-ui-react'

export default class Trailer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      vid: ''
    }
  }
  componentDidMount () {
    var api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534'
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.id.id}/videos?api_key=${api_key}`)
        .then((res) => {
          this.setState({
            vid: res.data.results[0].key
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
        <Modal.Header style={{textAlign: 'center'}}>{this.props.id.title}</Modal.Header>
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
