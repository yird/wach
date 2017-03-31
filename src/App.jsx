import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'
import MyList from './containers/MyList'
import Nav from './components/Nav'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogged: false,
      name: '',
      email: ''
    }
  }
  componentWillMount () {
    axios.post('/auth/getuser')
      .then(res => {
        if (res.data) {
          this.setState({
            isLogged: true,
            name: res.data.name,
            email: res.data.email
          })
        } else {
          this.setState({
            isLogged: false
          })
        }
      })
  }

  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Nav isLogged={this.state.isLogged} name={this.state.name} email={this.state.email} />
            <Route exact path='/' component={Home} />
            <Route path='/mylist' component={MyList} />
          </div>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
