import React from 'react'
import Trailer from './Trailer'
import {Label, Item} from 'semantic-ui-react'
// import CardTasks from './CardTasks'

export default ({movie}) => (
      <Item className='movie-card'>
          <Item.Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
          <Item.Content>
              <Item.Header as='a'>{movie.title}</Item.Header>
              <Item.Meta>
                  <Label>{movie.release_date}</Label>
              </Item.Meta>
              <Item.Description>{movie.overview}</Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
              <Trailer title={movie.title} id={movie.id}></Trailer>
          </Item.Content>
      </Item>
  )
