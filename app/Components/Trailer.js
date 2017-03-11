import React from 'react'
import axios from 'axios'
import { Embed, Button, Modal, Icon} from 'semantic-ui-react'

export default class Trailer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      youtubeLink: ''
    }
    this.getYoutubeLink = this.getYoutubeLink.bind(this)
  }

  getYoutubeLink = () => {
    if(!this.state.youtubeLink){
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534`)
      .then( res => {
        this.setState({youtubeLink:res.data.results[0].key})
      })
    }
  }
  render() {
    return(
        <Modal trigger={
          <Button onClick= {this.getYoutubeLink} basic color='grey' animated='fade'>
             <Button.Content visible>Trailer</Button.Content>
             <Button.Content hidden className='hidden-button'>
               <Icon name='video play' size='large' style={{fontSize:'1.8em'}} />
             </Button.Content>
           </Button>}>
          <Modal.Header style={{textAlign:'center'}}>{this.props.title}</Modal.Header>
          <Modal.Content>
              <Embed
               active={true}
               autoplay={true}
               id= {this.state.youtubeLink}
               source='youtube'
             />
          </Modal.Content>
        </Modal>
      )
    }
}

Trailer.propTypes = {
    id: React.PropTypes.number,
    title: React.PropTypes.string
}
