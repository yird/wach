import React from 'react'
import { connect } from 'react-redux'
import { Input, Menu, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Nav = ({logged}) => {
    let button = null
    let button2 = null
    let mylist = null
   if(logged){
     button2 = <Menu.Item><Button>Button2</Button></Menu.Item>
     mylist = <Link to='/mylist'><Button basic>My List</Button></Link>
   } else {
     mylist = <Link to='/gogo'><Button basic>My List</Button></Link>
     button = <Menu.Item><Login /></Menu.Item>
     button2 = <Menu.Item><Signup /></Menu.Item>
  }
   return (
     <Menu fixed='top' className='nav'>
       <Menu.Item>
         <Link to='/'><Button basic name='home' >Home</Button></Link>
       </Menu.Item>
       <Menu.Item>{mylist}</Menu.Item>
       <Menu.Item> <Input icon='search' placeholder='Search...' /> </Menu.Item>
       <Menu.Menu position='right'>
           {button2}
           {button}
       </Menu.Menu>
     </Menu>
       )
}

const mapStateToProps = (state) => {
  return {
    logged: state.mainReducer.logged
  }
}


export default connect(mapStateToProps)(Nav)
