import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import axios from 'axios'

class App extends React.Component{

    constructor(props){
        super(props);
    }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route exact path='/profile' component={Profile}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
