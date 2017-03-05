import React from 'react'
import axios from 'axios'
import Nav from './Nav'
import MovieCard from './MovieCard'
import Signup from './Signup'
import Login from './Login'


export default class Home extends React.Component{

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <MovieCard></MovieCard>
      </div>
    )
  }
}
