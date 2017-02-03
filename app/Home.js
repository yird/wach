import React from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import MovieCard from './MovieCard'


class App extends React.Component{

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <Header></Header>
        <MovieCard></MovieCard>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))