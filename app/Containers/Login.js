import React from 'react'
import { connect } from 'react-redux'
import { Button, Input, Image, Form, Modal } from 'semantic-ui-react'
import { loginUser } from '../actions/Actions'


class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let userInfo = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.loginUser(userInfo)

  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render(){
    return (
      <Modal trigger={<Button basic>Login</Button>} size='small' closeIcon='close'>
        <Modal style={{textAlign:'center'}}>Login</Modal>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
              <Form className='login-form' onSubmit={this.handleSubmit}>
                  <Form.Field>
                      <label>Email</label>
                      <Input icon='at' value={this.state.email} onChange={this.onChange} iconPosition='left' type='email' placeholder='your@email.com' name='email'/>
                  </Form.Field>

                  <Form.Field>
                      <label>Password</label>
                      <Input icon='key' value={this.state.password} onChange={this.onChange} iconPosition='left' type='password' placeholder='password' name='password'/>
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
}


const mapStateToProps = (state) => {
  return {
    data: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => {
      dispatch(loginUser(userInfo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
