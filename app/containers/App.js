import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import Nav from './containers/Nav'
import MyList from './containers/MyList'

export default App;
const App = (props) => (
      <Nav></Nav>
      
      <div>
        {props.children}
      </div>
    )
