
import React from 'react'
import axios from 'axios'
import Nav from './Nav'
import {Button, Image, Icon, Dropdown} from 'semantic-ui-react'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null
        }
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentWillMount(){
        axios.post('/api/getuser')
        .then(res => {
            this.setState({
                name: res.data.name
            })
        })
    }
    handleLogout(){
      axios.post('/api/logout');
      window.location.reload();
    }


    render() {


        const trigger = (
            <span>
                <Image src='http://semantic-ui.com/images/avatar2/large/rachel.png' avatar /> {this.state.name}
            </span>
            )

            const options = [
            {
                key: 'user',
                text: <span>Signed in as <strong>{this.state.name}</strong></span>,
                disabled: true,
            },
            { key: 'profile', selected:false, icon:'user', text: 'Profile' },
            { key: 'settings', icon:'settings', text: 'Settings' },
            { key: 'sign-out', icon:'sign out', text: 'Sign Out', onClick:this.handleLogout},
            ]

        return (
            <Dropdown className='well' trigger={trigger} pointing='top right' options={options}/>
        )
    }
    
}