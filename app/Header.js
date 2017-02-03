import React from 'react'
import { Input, Menu } from 'semantic-ui-react'


export default class Header extends React.Component{

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
      <Menu>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='favorites' active={activeItem === 'favorites'} onClick={this.handleItemClick} />
        <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
    }
}