import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './Home'
import Favorites from './Favorites'
import Nav from './Nav'
import MovieCard from './MovieCard'
import axios from 'axios'


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          isLogged: false,
          name: '',
          email: ''
        }
    }
    componentWillMount(){
      axios.post('/api/getuser')
      .then(res => {
        if(res.data) {
          this.setState({
              isLogged: true,
              name: res.data.name,
              email: res.data.email,
          })
        } else {
          this.setState({
              isLogged: false,
          })
        }
      })
    }

  render() {
    return (
      <Router>
        <div>
          <Nav isLogged={this.state.isLogged} name={this.state.name} email={this.state.email}></Nav>
          <Route exact path='/' component={MovieCard}/>
          <Route path='/favorites' component={Favorites}/>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('App'))
