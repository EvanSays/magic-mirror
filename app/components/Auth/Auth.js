import React, {Component} from 'react'
import runOauth from '../../../oauth.js'
import AuthCard from '../AuthCard/AuthCard'

class Auth extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    runOauth()
  }


  render() {
    // console.log('authobj', this.props);
    return (
      <div className='notifications'>
        <div className='github-icon'></div>
        <AuthCard authObj={this.props.authObj}/>
        <button onClick={() => this.props.getAuthData()}>Login</button>
      </div>
    )
  }
}

export default Auth;
