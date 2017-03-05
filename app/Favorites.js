import React from 'react'
import { Label, Item, Button, Image, Header } from 'semantic-ui-react'
import axios from 'axios'
import Trailer from './Trailer'
import Nav from './Nav'
import CardExtras from './CardExtras'

export default class Favorites extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          favorites: [],
        };
        this.getApi = this.getApi.bind(this);
        this.handleAddorDelete = this.handleAddorDelete.bind(this);
      }


    getApi(id) {
      axios.all(id.map(each => {
        return axios.get(`https://api.themoviedb.org/3/movie/${each}?api_key=d70794e4c63eb2c23e3e2a0cfeaa9534`)
          .then(res => {
            return res.data
          })
        })
      ).then(res => {
        this.setState({
          favorites: res.reverse()
        })
      })
    }

    componentDidMount(){
      document.body.scrollTop = 0;
      axios.get('/api/getFavorites')
      .then(res => {
        this.getApi(res.data)
      })
    }


    handleAddorDelete(id, status){
      id = {id:id}

      if(!status){
        axios.put('/api/addFavorite', id)
        .then(
          axios.get('/api/getFavorites')
          .then(res => {
            this.getApi(res.data)
          })
        )} else {
          axios.put('/api/deleteFavorite', id)
          .then(
            axios.get('/api/getFavorites')
            .then(res => {
              this.getApi(res.data)
            })
          )}
      return true;
  }

    render(){
      return(
        <div className='container'>
              <Item.Group className='movie-group'>
                  {this.state.favorites.map(function(res){
                    return (
                      <Item key={res.id} className='movie-card'>
                        <Item.Image src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} />
                        <Item.Content>
                          <Item.Header as='a'>{res.title}</Item.Header>
                          <Item.Meta>
                          <Label >{res.release_date}</Label>
                          <Label >{res.genres[0].name}</Label>
                          </Item.Meta>
                          <Item.Description>{res.overview}</Item.Description>
                          <Item.Extra>Additional Details</Item.Extra>
                          <Trailer id={res}></Trailer>
                        </Item.Content>
                        <CardExtras handleAddorDelete={this.handleAddorDelete} id={res.id}/>
                      </Item>
                    )
                  },this)}
              </Item.Group>
        </div>
      )
    }
}
