import React from 'react'
import { Input, Menu, Button } from 'semantic-ui-react'
import Login from './Login'
import { Link } from 'react-router-dom'


export default (props) => {
  let nav = null
  if (!props.loading){
        let button = null
        let button2 = null
        let open = null
      if(props.isLogged){
        button2 = <Menu.Item><Button>Button2</Button></Menu.Item>
        open = <Link to='/mylist'><Button basic>My List</Button></Link>
      }
      else {
        open = <Link to='/mylist'><Button basic>My List</Button></Link>
        button = <Menu.Item><Login /></Menu.Item>
        button2 = <Menu.Item><Button>Logout</Button></Menu.Item>
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
