import React from 'react'
import { Label, Item } from 'semantic-ui-react'
import Trailer from './Trailer'
import CardExtras from './CardExtras'

export default ({movie}) => {
  let poster
  movie.poster_path ? (
    poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  ) : (poster = `/images/noimage.png`)

  return (
    <Item className='movie-card'>
      <Item.Image src={poster} />
      <Item.Content className='card-content'>
        <Item.Header as='a'>{movie.title}</Item.Header>
        <Item.Meta>
          <Label>{movie.release_date}</Label>
        </Item.Meta>
        <Item.Description >{movie.overview}</Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
        <Trailer movie={movie} />
      </Item.Content>
      <CardExtras id={movie.id} />
    </Item>
  )
}
