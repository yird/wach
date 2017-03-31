import React from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <MovieCard />
      </div>
    )
  }
}
