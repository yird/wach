import React from 'react'
import { Button, Input, Image, Icon, Checkbox, Form, Header, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from './Login'
export default class Signup extends React.Component{

    constructor(props){
        super(props);
    }


  render() {
    return (
      <Modal trigger={<Button basic primary>Signup</Button>} size='small' closeIcon='close'>
        <Modal.Header style={{textAlign:'center'}}>Sign up</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
            <Form className='signup-form'>
                <Form.Field>
                    <label>Name</label>
                    <Input icon='user' iconPosition='left' type='name' placeholder='Name' />
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <Input icon='at' iconPosition='left' type='email' placeholder='your@email.com' />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <Input icon='key' iconPosition='left' type='email' placeholder='password' />
                </Form.Field>

                <Form.Field>
                    <label>Confirm Password</label>
                    <Input icon='key' iconPosition='left' type='email'type='password' placeholder='Confirm Password' />
                </Form.Field>
                <Form.Field>
                  <Button
                    style={{width:'100%', marginTop:'5'}}
                    animated='fade'
                    color='blue'
                    type='submit'>
                    <Button.Content visible>
                      Sign up
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name='thumbs up'/>
                    </Button.Content>
                  </Button>
                </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
