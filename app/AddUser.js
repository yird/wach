import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class AddUser extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            error: ''
        }
    }
    componentDidMount(){
        userData = {
            name: this.props.name,
            email: this.props.email,
            password: this.props.password,
            confirmPassword: this.props.confirmPassword
        }
         axios.post('/signup', userData)
            .then((res) => {
                this.setState({
                    error: 'error'
                })
            })   
    }

    render(){
        return (
            <p>welcome</p>
        )
    }

}