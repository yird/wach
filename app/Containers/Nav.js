import { connect } from 'react-redux'
import Nav from '../Components/Nav'


const mapStateToProps = (state) => {
  return {
    data: state.userReducer
  }
}


const NavContainer = connect(
  mapStateToProps
)(Nav)

export default NavContainer
