import React from 'react'
import { Embed, Button, Modal, Icon} from 'semantic-ui-react'


export default (props) => {
  return (
      <Modal trigger={
        <Button onClick={props.playTrailer} basic color='grey' animated='fade'>
           <Button.Content visible>Trailer</Button.Content>
           <Button.Content hidden className='hidden-button'>
             <Icon name='video play' size='large' style={{fontSize:'1.8em'}} />
           </Button.Content>
         </Button>}>
        <Modal.Header style={{textAlign:'center'}}>Tittle</Modal.Header>
        <Modal.Content>
            <Embed
             active={true}
             autoplay={true}
             id={props.movieData.videoId}
             source='youtube'
           />
        </Modal.Content>
      </Modal>
  )
}
