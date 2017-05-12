import React from 'react'
import axios from 'axios'
import { Loading, Input } from 'semantic-ui-react'
import MovieCard from '../components/MovieCard'
import { Redirect } from 'react-router-dom'

export default class Trailer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      results: null 
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit (e){
    e.preventDefault()
  }
  render () {
  return (
    <div>
      <form onSubmit={()=>handleSubmit}>
        <Input icon='search' value={this.state.value} onChange={this.onChange} name='value' placeholder='Search...'/>
      </form>
 </div>
  )
}
}
