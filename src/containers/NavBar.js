import React from 'react'
import { connect } from 'react-redux'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const NavBar = ({Authenticated}) => {
  if(Authenticated){
    console.log('Authenticated!!')
  }
  return (
      <Menu className='nav'> 
        {console.log(Authenticated)}
        <Menu.Item>
          <Link to='/'><Button basic name='home' >Home</Button></Link>
        </Menu.Item>
        <Menu.Item><Button basic>My List</Button></Menu.Item>
        <Menu.Item> <Input icon='search' placeholder='Search...' /></Menu.Item>
          {Authenticated ? (
            <Menu.Menu position='right'>
              <Menu.Item><Button basic color='blue'>Settings</Button></Menu.Item>
              <Menu.Item><Link to='/login'><Button basic color='green'>Logout</Button></Link></Menu.Item>
            </Menu.Menu>
          ): (
            <Menu.Menu position='right'>
              <Menu.Item><Button basic color='blue'>Signup</Button></Menu.Item>
              <Menu.Item><Link to='/login'><Button basic color='green'>Login</Button></Link></Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
   )
 }

const mapStateToProps = (state) => {
  return {
    Authenticated: state.userReducer.Authenticated
  }
} 

export default connect(mapStateToProps)(NavBar)
