import React from 'react'
import { connect } from 'react-redux'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Profile from '../containers/Profile'

const Nav = ({Authenticated, Loading}) => {
  if (Loading) return <i />
  return (
    <Menu className='nav' fixed='top'>
      <Menu.Item>
        <Link to='/'><Button basic name='home' >Home</Button></Link>
      </Menu.Item>
      <Menu.Item><Link to='/mylist'><Button basic>My List</Button></Link></Menu.Item>
      <Menu.Item> <Input icon='search' placeholder='Search...' /></Menu.Item>
      {Authenticated ? (
        <Menu.Menu position='right'>
          <Menu.Item><Profile /></Menu.Item>
        </Menu.Menu>
        ) : (
          <Menu.Menu position='right'>
            <Menu.Item><Signup /></Menu.Item>
            <Menu.Item><Login /></Menu.Item>
          </Menu.Menu>
      )}
    </Menu>
  )
}

const mapStateToProps = (state) => {
  return {
    Authenticated: state.userReducer.authenticated,
    Loading: state.userReducer.user.loading
  }
}

export default connect(mapStateToProps)(Nav)
