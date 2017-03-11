import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom'
import Home from './containers/Home'
import Nav from './containers/Nav'
import Login from './components/Login'
import MyList from './containers/MyList'
import { Provider } from 'react-redux'
import store from './store'



render(
  <Provider store={store}>
    <Router>
      <div>
        <Nav></Nav>
        <Route exact path='/' component={Home}/>
        <Route path='/mylist' component={MyList}/>
      </div>
    </Router>
  </Provider>

  ,document.getElementById('App')
)
