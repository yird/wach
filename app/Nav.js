import React from 'react'
import { Input, Menu, Button, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


export default class Nav extends React.Component{

    constructor(props){
        super(props);
        this.state = { activeItem: this.props.name }
    }


  render() {
    const { activeItem } = this.state

    return (
      <Menu fixed='top' className='nav'>
        <Menu.Item>
          <Link to='/'><Button basic name='home' active={activeItem === 'home'}>Home</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Button basic name='favorites' active={activeItem === 'favorites'}>Favorites</Button>
        </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Link to='/signup'><Button basic active={activeItem === 'signup'} primary>Sign up</Button></Link>
          </Menu.Item>
          <Menu.Item>
            <Link to='/login'><Button basic active={activeItem === 'login'}>Log in</Button></Link>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
    }
}
