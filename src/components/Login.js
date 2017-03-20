import React from 'react'
import { Modal, Icon, Input, Form, Message, Button } from 'semantic-ui-react'

export default () => (
  <Form className='login-form'  onSubmit={this.validateLogin}>
      <Form.Field>
          <label>Email</label>
          <Input icon='at' iconPosition='left' type='email' placeholder='your@email.com' name='email'/>
          <Message error content='E-mail field cannot be empty.'/>
      </Form.Field>
      <Form.Field>
          <label>Password</label>
          <Input icon='key' iconPosition='left' type='password' placeholder='password' name='password'/>
      </Form.Field>
      <Form.Field>
        <Button type='submit' fluid primary animated='fade'>
        <Button.Content visible>Login</Button.Content>
        <Button.Content hidden>
          <Icon name='checkmark'/>
        </Button.Content>
        </Button>
      </Form.Field>
  </Form>
)
