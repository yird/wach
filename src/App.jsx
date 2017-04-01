import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import MyList from './containers/MyList'
import Nav from './containers/Nav'
import { getUser } from './actions/userAction'

class App extends React.Component {
  componentWillMount () {
    store.dispatch(getUser())
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav />
            <Route exact path='/' component={Home} />
            <Route path='/mylist' component={MyList} />
          </div>
        </Router>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('App'))
