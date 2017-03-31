import React from 'react'
import { Label, Item } from 'semantic-ui-react'
import Trailer from './Trailer'
import CardExtras from './CardExtras'

export default ({movie}) => {
  return (
    <Item className='movie-card'>
      <Item.Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <Item.Content>
        <Item.Header as='a'>{movie.title}</Item.Header>
        <Item.Meta>
          <Label>{movie.release_date}</Label>
        </Item.Meta>
        <Item.Description>{movie.overview}</Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
        <Trailer movie={movie} />
      </Item.Content>
      <CardExtras id={movie.id} />
    </Item>
  )
}
