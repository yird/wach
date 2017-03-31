import React from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from '../containers/Login'
import Signup from '../containers/Signup'
import Profile from '../containers/Profile'

export default class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      isLogged: this.props.isLogged,
      name: this.props.name,
      email: this.props.email
    }
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      isLogged: nextProps.isLogged,
      loading: false,
      name: nextProps.name,
      email: nextProps.email
    })
  }

  render () {
    let nav = null
    if (!this.state.loading) {
      let button = null
      let button2 = null
      let open = null
      if (this.state.isLogged) {
        button2 = <Menu.Item><Profile name={this.state.name} email={this.state.email} /></Menu.Item>
        open = <Link to='/mylist'><Button basic>My List</Button></Link>
      } else {
        open = <Login name='My List' />
        button = <Menu.Item><Login /></Menu.Item>
        button2 = <Menu.Item><Signup /></Menu.Item>
      }
      nav = (<Menu fixed='top' className='nav'>
        <Menu.Item>
          <Link to='/'><Button basic name='home' >Home</Button></Link>
        </Menu.Item>
        <Menu.Item>
          {open}
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Menu position='right'>
          {button2}
          {button}
        </Menu.Menu>
      </Menu>)
    }
    return (
      <div>
        {nav}
      </div>
    )
  }
}
