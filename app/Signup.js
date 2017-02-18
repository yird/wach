import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Nav from './Nav'

export default class Signup extends React.Component{

    constructor(props){
        super(props);
    }
  

  render() {
    return (
        <div>
        <Nav name='signup'></Nav>
        <div className='signup-container'>
            <Form className='form'>
                <h1 style={{textAlign:'center'}}>Sign Up</h1>
                <Form.Field>
                    <label>Name</label>
                    <input placeholder='Name' />
                </Form.Field>

                <Form.Field>
                    <label>Email</label>
                    <input type='email' placeholder='your@email.com' />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input type='password' placeholder='Password' />
                </Form.Field>

                <Form.Field>
                    <label>Confirm Password</label>
                    <input type='password' placeholder='Confirm Password' />
                </Form.Field>
                <Form.Field>
                     <Link to='/login'><p>Already have an account</p></Link>
                </Form.Field>
                <Button style={{width:'100%'}} color='blue' type='submit'>Sign up</Button>
            </Form>   
        </div>
        </div>
    )
  }
}