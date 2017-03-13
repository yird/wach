import React from 'react'
import axios from 'axios'
import {Image, Dropdown} from 'semantic-ui-react'

export default (props) => {

  const handleLogout = () => {
    axios.post('/api/logout')
    window.location.replace('/')
  }

  return(
      <Dropdown className='well' pointing='top right'
        trigger={
          <span>
            <Image src='http://semantic-ui.com/images/avatar2/large/rachel.png' avatar /> Afram
          </span>
        }
        options={[
            { key: 'user', text: <span>Signed in as <strong>Afram</strong></span>,disabled:true},
            { key: 'profile', selected:false, icon:'user', text: 'Profile' },
            { key: 'settings', icon:'settings', text: 'Settings' },
            { key: 'sign-out', icon:'sign out', text: 'Sign Out', onClick:handleLogout},
          ]}
      />
  )
}
