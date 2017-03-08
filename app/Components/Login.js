import React from 'react'
import { Button, Input, Image, Form, Modal } from 'semantic-ui-react'



export default (props) => {
  return (
    <Modal trigger={<Button basic>Login</Button>} size='small' closeIcon='close'>
      <Modal style={{textAlign:'center'}}>Login</Modal>
      <Modal.Content image>
        <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
        <Modal.Description className='form-container'>
            <Form className='login-form' onSubmit={this.login}>
                <Form.Field>
                    <label>Email</label>
                    <Input icon='at' iconPosition='left' type='email' placeholder='your@email.com' name='email'/>
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <Input icon='key' iconPosition='left' type='email' type='password' placeholder='password' name='password'/>
                </Form.Field>
                <Form.Field>
                  <Button style={{marginTop:'5%'}}  color='blue' icon='checkmark' labelPosition='right' content="Login" />
                </Form.Field>
            </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}
