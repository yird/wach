import React from 'react'
import { Label, Item, Button, Image, Header } from 'semantic-ui-react'
import axios from 'axios'
import Trailer from './Trailer'


export default class MovieCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          all: [],
        }
    }
    componentDidMount(){
      var api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534';
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then((res) => {
          this.setState({
            all : res.data.results
          })
        })
    }

    render() {
      return (
        <div className='container'>
              <Item.Group>
                  {this.state.all.map(function(res){
                    return (
                      <Item key={res.id} className='movie-card'>
                        <Item.Image src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                        <Item.Content>
                          <Item.Header as='a'>{res.title}</Item.Header>
                          <Item.Meta>
                            <Label>{res.release_date}</Label>
                          </Item.Meta>
                          <Item.Description>{res.overview}</Item.Description>
                          <Trailer id={res.id}></Trailer>
                          <Item.Extra>Additional Details</Item.Extra>
                        </Item.Content>
                      </Item>
                    )
                  })}
              </Item.Group>
        </div>
      )
  }
}
