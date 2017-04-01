import React from 'react'
import { Button, Input, Image, Icon, Form, Modal } from 'semantic-ui-react'
import axios from 'axios'

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',

      error: '',
      loader: ''
    }
    this.name = this.props.name || 'Login'
    this.validateLogin = this.validateLogin.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  validateLogin (e) {
    e.preventDefault()
    if (this.state.email && this.state.password !== '') {
      var loginInfo = {
        email: this.state.email,
        password: this.state.password
      }

      axios.post('/auth/login', loginInfo)
          .then((response) => {
            if (this.name === 'My List') {
              window.location.replace('/mylist')
            } else {
              window.location.replace('/')
            }
          }).catch((error) => {
            console.log(error)
            this.setState({
              loader: <Icon color='red' size='large' name='warning circle' />,
              error: 'Incorrect Email or Password'
            })
          })
    } else {
      this.setState({
        loader: <Icon color='red' size='large' name='warning circle' />,
        error: 'Fields cannot be empty'
      })
    }
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <Modal trigger={<Button basic>{this.name}</Button>} size='small' closeIcon='close'>
        <Modal.Header style={{textAlign: 'center'}}>Login</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
            <Form className='login-form' onSubmit={this.validateLogin}>
              <Form.Field>
                <label>Email</label>
                <Input icon='at' value={this.state.email} iconPosition='left' type='email' onChange={this.onChange} placeholder='your@email.com' name='email' />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <Input icon='key' value={this.state.password} iconPosition='left' type='password' onChange={this.onChange} placeholder='password' name='password' />
              </Form.Field>
              {this.state.loader}
              {this.state.error}
              <Form.Field>
                <Button style={{marginTop: '5%'}} color='blue' icon='checkmark' labelPosition='right' content='Login' />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}
