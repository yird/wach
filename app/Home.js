import React from 'react'
import axios from 'axios'
import Nav from './Nav'
import MovieCard from './MovieCard'
import Signup from './Signup'
import Login from './Login'


export default class Home extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          isLogged: false
        }
    }

    componentWillMount(){
      axios.post('/api/islogged')
      .then((response) => {
          this.setState({
            isLogged: response.data
          })
      })
    }

  render() {
    return (
      <div>
        <Nav isLogged={this.state.isLogged} ></Nav>
        <MovieCard></MovieCard>
    </div>
    )
  }
}
