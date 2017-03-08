import React from 'react'
import Trailer from '../Components/Trailer'
import CardTasks from '../Components/CardTasks'
import {Label, Item} from 'semantic-ui-react'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
      this.props.fetchPopular()
    }

    render() {
        const { movieData, playTrailer } = this.props
        return (
            <div className='container'>
                <Item.Group className='movie-group'>
                    {movieData.movies.map(function(movie) {
                        return (
                            <Item key={movie.id} className='movie-card'>
                                <Item.Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                                <Item.Content>
                                    <Item.Header as='a'>{movie.title}</Item.Header>
                                    <Item.Meta>
                                        <Label>{movie.release_date}</Label>
                                    </Item.Meta>
                                    <Item.Description>{movie.overview}</Item.Description>
                                    <Item.Extra>Additional Details</Item.Extra>
                                    <Trailer movieData={movieData} playTrailer={() => playTrailer(movie.id)}></Trailer>
                                </Item.Content>
                                <CardTasks id={movie.id} />
                            </Item>
                        )
                    })}
                </Item.Group>
            </div>
        )
    }
}
