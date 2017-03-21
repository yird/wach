import React from 'react'
import { connect } from 'react-redux'
import { Modal, Icon, Input, Form, Message, Button } from 'semantic-ui-react'
import { loginUser} from '../actions/authActions'


 class Login extends React.Component {

  constructor(props){
    super(props)
    
    this.state = {
      email: '',
      password: '',
      loading: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(data)
  }
  onChange = (e,{name}) => {
    this.setState({
      [name]: e.target.value
    })
  }
  render() {
    return(
      <Form className='login-form' loading={this.state.loading} onSubmit={this.onSubmit}>
          <Form.Field>
              <label>Email</label>
              <Input value={this.state.email} onChange={this.onChange} name='email' icon='at' iconPosition='left' type='email' placeholder='your@email.com'/>
              <Message error content='E-mail field cannot be empty.'/>
          </Form.Field>
          <Form.Field>
              <label>Password</label>
              <Input value={this.state.password} onChange={this.onChange} name='password'icon='key' iconPosition='left' type='password' placeholder='password'/>
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
  }
} 
export default connect(null, {loginUser})(Login)
