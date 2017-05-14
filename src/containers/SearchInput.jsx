import React from 'react'
import { Input } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

export default class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      doSearch: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      doSearch: true
    })
  }
  componentDidUpdate () {
    if (this.state.doSearch === true) {
      this.setState({
        doSearch: false
      })
    }
  }
  render () {
    return (
      <div>
        {this.state.doSearch ? <Redirect to={`/s?q=${this.state.query}`} /> : null}
        <form onSubmit={this.handleSubmit}>
          <Input icon='search' value={this.state.value} onChange={this.handleChange} name='query' placeholder='Search...' />
        </form>
      </div>
    )
  }
}
