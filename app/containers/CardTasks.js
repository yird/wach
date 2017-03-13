import React from 'react'
import { connect } from 'react-redux'
import { addToMyList } from '../actions/Actions'
import {Item, Button, Icon} from 'semantic-ui-react'
import axios from 'axios'


class CardTasks extends React.Component {


  constructor(props) {
    super(props);
    this.state= {
      id: this.props.id,
      added: null,
      loved: null,
      watched: null
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    axios.get('/api/getFavorites')
    .then(res => {
        var isValue = res.data.includes(this.state.id)
        this.setState({
          added: isValue
        })
      });
  }

  handleClick(e, {name}){
    if (name === 'add'){
      let done = this.props.handleAddorDelete(this.state.id, this.state.added)
      if(done){
      this.setState({
        added: !this.state.added
      })
    }
    }
    if (name === 'love'){
      this.setState({
        loved: !this.state.loved
      })}
    if (name === 'watched'){
      this.setState({
        watched: !this.state.watched
      })}
    }

  render(){

    let add = <Button name='add' basic onClick={this.handleClick}><Icon className='extra-icons' name='add'></Icon></Button>
    let love = <Button name='love' basic onClick={this.handleClick}><Icon className='extra-icons' name='heart'></Icon></Button>
    let watched = <Button name='watched' basic onClick={this.handleClick}><Icon className='extra-icons' name='desktop'></Icon></Button>

    if(this.state.added){
      add = <Button name='add' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='remove'></Icon></Button>
    }
    if (this.state.loved){
      love = <Button name='love' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='heart'></Icon></Button>
    }
    if (this.state.watched){
      watched = <Button name='watched' basic onClick={this.handleClick}><Icon color='red' className='extra-icons' name='desktop'></Icon></Button>
    }
    return(
      <Item.Content className='extra-card'>
        {add}
        {love}
        {watched}
      </Item.Content>

    )
  }
}



const mapStateToProps = (state) => {
  return {
    data: state.mainReducer.user
  }
}

const mapDispatchToProps = (Dispatch) => {
  return {
    addToMyList: (movie) => {
      dispatch(addToMyList(movie))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CardTasks)
