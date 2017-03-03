import React from 'react'
import { Button, Dimmer, Segment, Loader, Input, Image, Icon, Checkbox, Form, Header, Modal } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import Login from './Login'
import AddUser from './AddUser'

export default class Signup extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',

          error: '',
          loader: ''
        }

     
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
      e.preventDefault();
      const warning = <Icon color='red' size='large' name='warning circle'/>;
      if (this.state.name.length >= 3 && this.state.email !== ''){
        if (this.state.password.length >= 6){
            
          if (this.state.password === this.state.confirmPassword ){

            const userData = {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              confirmPassword: this.state.confirmPassword
            }
          
            //makes a post request to add the user to the database.
             axios.post('/api/signup', userData)
              .then( res => {
                if (!res.data){
                  this.setState({
                    loader: warning,
                    error: 'Email is already in use!'
                  })
                } else {
                  window.location.reload();
                }
              }
              ).catch(function(err){
                console.log(err)
              })   

          } else { // password did not match
              this.setState({
                loader: warning,
                error: 'Passwords did not match'
              })
          }
          
        } else { // password is < 6
            this.setState({
              loader: warning,
              error: 'Password must be greater than 6 characters'
            })
          }
      } else { // name was < 3 or email is empty
          this.setState({
              loader: warning,
              error: 'Invalid Name or Email'
          })        
      }
    }
    

    onChange(e){
      this.setState({
        [e.target.name]: e.target.value
      })
    }


  render() {
    return (
      <Modal open={this.state.modal} dimmer='inverted' trigger={<Button basic primary>Signup</Button>} className='signup-model' size='small' closeIcon='close'>
        <Modal.Header style={{textAlign:'center'}}>Sign up</Modal.Header>
        <Modal.Content image>
          <Image wrapped size='medium' src='http://semantic-ui.com/images/avatar2/large/rachel.png' />
          <Modal.Description className='form-container'>
            <Form className='signup-form' onSubmit={this.onSubmit}>
                <Form.Field>
                    <label>Name</label>
                    <Input icon='user' value={this.state.name} onChange={this.onChange} iconPosition='left' type='text' name='name' placeholder='Name' />
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <Input icon='at' value={this.state.email} onChange={this.onChange} iconPosition='left' type='email' name='email' placeholder='your@email.com' />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <Input icon='key' value={this.state.password} onChange={this.onChange} iconPosition='left' type='password' name='password' placeholder='password' />
                </Form.Field>

                <Form.Field>
                    <label>Confirm Password</label>
                    <Input icon='key' value={this.state.confirmPassword} onChange={this.onChange} iconPosition='left' type='password' name='confirmPassword' placeholder='Confirm Password' />
                </Form.Field>
                  {this.state.loader}
                  {this.state.error}
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
}
