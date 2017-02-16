import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

class App extends React.Component{

    constructor(props){
        super(props);
    }

  render() {
    return (
      <Router>
        <Route exact path='/' component={Home}/>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
