import React from 'react'

import Nav from './Nav'
import MovieCard from './MovieCard'


export default class Home extends React.Component{

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <Nav name='home'></Nav>
        <MovieCard></MovieCard>
    </div>
    )
  }
}
