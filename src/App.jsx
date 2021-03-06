import React from 'react'
import store from './store'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import MyList from './containers/MyList'
import Nav from './containers/Nav'
import Watched from './containers/Watched'
import Search from './containers/Search'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path='/' component={Home} />
          <Route path='/mylist' component={MyList} />
          <Route path='/watched' component={Watched} />
          <Route path='/s' component={Search} />
        </div>
      </Router>
    </Provider>
  )
}
ReactDOM.render(<App />, document.getElementById('App'))
