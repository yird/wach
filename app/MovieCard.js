import React from 'react'
// import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'
import { Label, Card, Item, Sidebar, Segment, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'
// import Request from 'request'
import axios from 'axios'



export default class MovieCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          all: [],
          visible: false
        }
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    componentDidMount(){
      var api_key = 'your api';
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        .then((res) => {
          this.setState({
            all : res.data.results
          })
        })
    }

    toggleVisibility(){
      this.setState({ visible: !this.state.visible })
    }

    render() {
      const { visible } = this.state
      return (
        <div className='rapper'>
              <Item.Group>
                  {this.state.all.map(function(res){
                    return (
                      <Item>
                        <Item.Image src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                        <Item.Content>
                          <Item.Header as='a'>{res.title}</Item.Header>
                          <Item.Meta>
                            <Label>{res.release_date}</Label>
                          </Item.Meta>
                          <Item.Description>{res.overview}</Item.Description>
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
