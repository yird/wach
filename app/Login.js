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
        <Nav name='login'></Nav>
        <div className='signup-container'>
            <Form className='form'>
                <h1 style={{textAlign:'center'}}>Login</h1>
                <Form.Field>
                    <label>Email</label>
                    <input type='email' placeholder='your@email.com' />
                </Form.Field>

                <Form.Field>
                    <label>Password</label>
                    <input type='password' placeholder='Password' />
                </Form.Field>
                <Form.Field>
                    <Link to='/signup'><p>Create an account</p></Link>
                </Form.Field>
                <Button style={{width:'100%'}} color='blue' type='submit'>Login</Button>
            </Form>   
        </div>
        </div>
    )
  }
}