import React from 'react'
import { connect } from 'react-redux'
import { Menu, Button, Icon, Popup } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Profile from '../containers/Profile'
import SearchInput from './SearchInput'

const Nav = ({Authenticated, Loading}) => {
  if (Loading) return <i />
  return (
    <Menu className='nav' fixed='top'>
      <Menu.Item>
        <Link to='/'><Button basic name='home' >Home</Button></Link>
      </Menu.Item>
      {Authenticated ? (
        <Menu.Item><Link to='/mylist'><Button basic>My List</Button></Link></Menu.Item>
      ) : (
        <Menu.Item><Popup
          trigger={<Button basic>My List</Button>}
          content='You must be logged in'
          on='click'
          hideOnScroll
        /></Menu.Item>
      )}
      <Menu.Item><SearchInput /></Menu.Item>
      {Authenticated ? (
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/watched'><Button basic><Icon className='extra-icons' name='desktop' /></Button></Link>
            </Menu.Item>
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
