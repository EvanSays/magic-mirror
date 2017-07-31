import React, {Component} from 'react'
import runOauth from '../../../oauth.js'
import AuthCard from '../AuthCard/AuthCard'

class Auth extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getAuthData()
  }

  componentWillMount() {
    runOauth()
  }

  render() {
    return (
      <div className='notifications'>
        <header>
          {/* <div className='github-icon'></div> */}
          <h1>Notifications</h1>
        </header>
        <AuthCard authObj={this.props.authObj}/>
        {/* <button onClick={() => this.props.getAuthData()}>Login</button> */}
      </div>
    )
  }
}

export default Auth;
