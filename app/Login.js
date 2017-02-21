import React from 'react'
import { Button, Input, Image, Header, Icon, Label, Checkbox, Form, Modal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Signup extends React.Component{

    constructor(props){
        super(props);
    }


  render() {
    return (
      <Modal trigger={<Button basic>Login</Button>} size='small' closeIcon='close'>
        <Modal.Header style={{textAlign:'center'}}>Login</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
              <Form className='login-form'>
                  <Form.Field>
                      <label>Email</label>
                      <Input icon='at' iconPosition='left' type='email' placeholder='your@email.com' />
                  </Form.Field>

                  <Form.Field>
                      <label>Password</label>
                      <Input icon='key' iconPosition='left' type='email'type='password' placeholder='password' />
                  </Form.Field>
                  <Form.Field>
                    <Button style={{marginTop:'5'}}  color='blue' icon='checkmark' labelPosition='right' content="Login" />
                  </Form.Field>
              </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
