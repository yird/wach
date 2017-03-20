import React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router,  Route} from 'react-router-dom'
import { render } from 'react-dom'
import App from './containers/App'
import NavBar from './components/NavBar'
import Login from './components/Login'
render(
  <Provider store={store}>
    <Router>
      <div>
        <NavBar></NavBar>
        <Route exact path='/' component={App}/>
        <Route path='/login' component={Login}/>
      </div>
    </Router>
  </Provider>

,document.getElementById('App'))
