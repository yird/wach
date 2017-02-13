import React from 'react'
import ReactDOM from 'react-dom'

import Head from './Head'
import MovieCard from './MovieCard'


class Home extends React.Component{

    constructor(props){
        super(props);
    }

  render() {
    return (
      <div>
        <Head></Head>
        <MovieCard></MovieCard>
    </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'))
