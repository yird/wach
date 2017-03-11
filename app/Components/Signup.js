import React from 'react'
import { Button, Input, Image, Icon, Form, Modal } from 'semantic-ui-react'

export default (props) => {

    return (
      <Modal trigger={<Button basic primary>Signup</Button>} className='signup-model' size='small' closeIcon='close'>
        <Modal.Header style={{textAlign:'center'}}>Sign up</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
            <Form className='signup-form'>
                <Form.Field>
                    <label>Name</label>
                    <Input icon='user' value='' iconPosition='left' type='text' name='name' placeholder='Name' />
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <Input icon='at' value='' iconPosition='left' type='email' name='email' placeholder='your@email.com' />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <Input icon='key' value='' iconPosition='left' type='password' name='password' placeholder='password' />
                </Form.Field>

                <Form.Field>
                    <label>Confirm Password</label>
                    <Input icon='key' value='' iconPosition='left' type='password' name='confirmPassword' placeholder='Confirm Password' />
                </Form.Field>
                <Form.Field>
                  <Button
                    style={{width:'100%', marginTop:'5%'}}
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
