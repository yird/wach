import React from 'react'
import { Input, Loader, Menu, Button, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import axios from 'axios'


export default class Nav extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
          isLogged: this.props.isLogged,
          loading: true
        }
    }

    componentWillReceiveProps(nextProps) {
      this.setState({
        isLogged: nextProps.isLogged,
        loading: false
      });
    }

  render() {
  let nav = null
  if (this.state.loading === false){
        let button = null
        let button2 = null
      if(this.state.isLogged === true){
        button2 = <Menu.Item><Profile /></Menu.Item>
      }
      else {
        button = <Menu.Item><Login /></Menu.Item>
        button2 = <Menu.Item><Signup /></Menu.Item>
      }
      nav = (<Menu fixed='top' className='nav'>
              <Menu.Item>
                <Link to='/'><Button basic name='home' >Home</Button></Link>
              </Menu.Item>
              <Menu.Item>
                <Button basic name='favorites' >Favorites</Button>
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