import React from 'react'
import { Label, Item, Icon, Button, Image, Header } from 'semantic-ui-react'
import axios from 'axios'
import Trailer from './Trailer'
import Nav from './Nav'


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
              <Item.Group className='movie-group'>
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
                          <Item.Extra>Additional Details</Item.Extra>
                          <Trailer id={res}></Trailer>
                        </Item.Content>
                        <Item.Content className='extra-card'>
                          <Button basic color='red'><Icon className='extra-icons' name='add'></Icon></Button>
                          <Button basic color='red'><Icon className='extra-icons' name='heart'></Icon></Button>
                          <Button basic color='red'><Icon className='extra-icons' name='video camera'></Icon></Button>
                        </Item.Content>
                      </Item>
                    )
                  })}
              </Item.Group>
        </div>
      )
  }
}
