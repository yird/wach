import React from 'react'
import { connect } from 'react-redux'
import { Icon, Dropdown } from 'semantic-ui-react'
import { logout } from '../actions/userActions'

const Profile = ({User, Logout}) => {
  return (
    <Dropdown icon='user' text={User.name} pointing='top right' floating labeled button basic className='icon'>
      <Dropdown.Menu>
        <Dropdown.Item disabled className='dropdownHeader'>
          <Icon name='tags' />
            Signed in as <strong>{User.name}</strong>
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <Icon name='user' />
            Profile
          </Dropdown.Item>
        <Dropdown.Item>
          <Icon name='settings' />
            Settings
          </Dropdown.Item>
        <Dropdown.Item onClick={Logout}>
          <Icon name='sign out' />
            Logout
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
const mapStateToProps = (state) => {
  return {
    User: state.userReducer.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    Logout: () => {
      dispatch(logout)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
