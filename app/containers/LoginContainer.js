import { connect } from 'react-redux';
import { login, logout, auth } from 'redux-implicit-oauth2'
import LoginIn from '../components/Login/Login';
import { fetchLogin, fetchLogout } from '../actions'

const mapStateToProps = ({ auth }) => {
  return {
    isLoggedIn: auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(fetchLogin())
    },
    logout: () => {
      dispatch(fetchLogout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginIn)
