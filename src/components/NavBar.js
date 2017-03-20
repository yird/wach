import React from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import Login from './Login'
import { Link } from 'react-router-dom'

export default ({Authenticated}) => {
  return (
      <Menu className='nav'> 
        <Menu.Item>
          <Button basic name='home' >Home</Button>
        </Menu.Item>
        <Menu.Item><Button basic>My List</Button></Menu.Item>
        <Menu.Item> <Input icon='search' placeholder='Search...' /></Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item><Button basic color='blue'>Signup</Button></Menu.Item>
          <Menu.Item><Link to='/login'><Button basic color='green'>Login</Button></Link></Menu.Item>
        </Menu.Menu>
      </Menu>
   )
 }
