import React from 'react'

import axios from 'axios'

export default class Validate extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            re: ''
        }
    }

    componentDidMount(){
        axios.post('/login', this.props.loginInfo)
          .then(function(response){
            console.log(response.data);
          });
    }

    render(){
        return(
            <div>welcome</div>
        )
    }
}