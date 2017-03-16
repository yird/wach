import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import MyList from './MyList'


export default class App extends React.Components {

  <Route exact path='/' component={Home}/>
  <Route path='/mylist' component={MyList}/>
  <Nav></Nav>
}
