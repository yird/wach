import React from 'react'
import axios from 'axios'
import { Button, Icon} from 'semantic-ui-react'

export default class Trailer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          vid : []
        }
    }
    componentDidMount(){
      var api_key = 'd70794e4c63eb2c23e3e2a0cfeaa9534';
      axios.get(`https://api.themoviedb.org/3/movie/${this.props.id}/videos?api_key=${api_key}`)
        .then((res) => {
          this.setState({
            vid : res.data.results[0].key
          })
        })
    }

  render() {
    return (
      <Button basic color='blue' animated href={`https://www.youtube.com/watch?v=${this.state.vid}`}>
       <Button.Content visible>Trailer</Button.Content>
       <Button.Content hidden>
         <Icon name='play' />
       </Button.Content>
     </Button>
    )
  }
}
