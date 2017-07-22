import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
// import { login, logout } from 'redux-implicit-oauth2'

const LoginIn = ({ isLoggedIn, login, logout }) => {

  if (isLoggedIn) {
    return (<button type='button' onClick={logout}>Logout</button>)
  } else {
    return (<button type='button' onClick={login}>Login</button>)
  }

}

export default LoginIn
