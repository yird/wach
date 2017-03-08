import React from 'react'
import {Label, Item} from 'semantic-ui-react'
import Trailer from './Trailer'

export default class MyList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){

      this.props.fetchMovie(this.props.mylistIds)
      
  }
  render(){
    const {movieData,fetchMovie, playTrailer} = this.props
    return(
      <div className='container'>
            <Item.Group className='movie-group'>
                {movieData.mylist.map(function(movie){
                  return (
                    <Item key={movie.id} className='movie-card'>
                      <Item.Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                      <Item.Content>
                        <Item.Header as='a'>{movie.title}</Item.Header>
                        <Item.Meta>
                        <Label >{movie.release_date}</Label>
                        </Item.Meta>
                        <Item.Description>{movie.overview}</Item.Description>
                        <Item.Extra>Additional Details</Item.Extra>
                        <Trailer movieData={movieData} playTrailer={() => playTrailer(movie.id)}></Trailer>
                      </Item.Content>
                    </Item>
                  )
                })}
            </Item.Group>
      </div>
    )
  }
}
