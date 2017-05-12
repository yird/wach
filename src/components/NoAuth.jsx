import React from 'react'
import { Button, Dimmer, Header, Icon } from 'semantic-ui-react'

export default ({history}) => {
  let handleHide = () => {
    history.push('/')
  }
  return (
    <Dimmer inverted active onClickOutside={handleHide}>
      <Header inverted icon as='h2'>
        <Icon name='lock' />
        You Must be Logged in!
        <Header.Subheader>
          <Button color='blue' content='Ok' onClick={handleHide} style={{margin: '2em'}} />
        </Header.Subheader>
      </Header>
    </Dimmer>
  )
}
