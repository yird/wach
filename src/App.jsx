import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './containers/Home'
import MyList from './containers/MyList'
import Nav from './components/Nav'
import MovieCard from './components/MovieCard'
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
    axios.post('/api/getuser')
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
      <Router>
        <div>
          <Nav isLogged={this.state.isLogged} name={this.state.name} email={this.state.email} />
          <Route exact path='/' component={MovieCard} />
          <Route path='/mylist' component={MyList} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
