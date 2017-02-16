import React from 'react'
import { Input, Menu, Button, Image, Icon } from 'semantic-ui-react'


export default class Nav extends React.Component{

    constructor(props){
        super(props);
        this.state = { activeItem: 'home' }
        this.handleItemClick = this.handleItemClick.bind(this);
    }

  handleItemClick(e, {name}){
    this.setState({
        activeItem: name
    })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu className='nav'>

      <Menu.Item>
        <Button basic name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Button>
      </Menu.Item>
        <Menu.Item>
          <Button basic name='favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick}>Favorites</Button>
        </Menu.Item>
        <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button basic active={activeItem === 'sign up'} onClick={this.handleItemClick} primary>Sign up</Button>
          </Menu.Item>
          <Menu.Item>
            <Button basic active={activeItem === 'login'} onClick={this.handleItemClick}>Log in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
    }
}
