import { connect } from 'react-redux'
import Login from '../components/Login'
import { loginUser } from '../actions/Actions'

const mapStateToProps = (state) => {
  return {
    data: 'wellcome'
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userInfo) => {
      dipatch(loginUser(userInfo))
    }
  }
}
const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
