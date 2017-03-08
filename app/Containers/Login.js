import { connect } from 'react-redux'
import Login from '../Components/Login'


const mapStateToProps = (state) => {
  return {
    data: state.userReducer
  }
}


const LoginContainer = connect(
  mapStateToProps
)(Login)

export default LoginContainer
