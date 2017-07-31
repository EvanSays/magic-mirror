import React, {Component} from 'react'
import runOauth from '../../../oauth.js'
import AuthCard from '../AuthCard/AuthCard'

class Auth extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getAuthData();
    }, 1000 * 60 * 30)
  }

  componentWillMount() {
    runOauth()
    this.props.getAuthData()
  }

  render() {
    return (
      <div className='notifications'>
        <header>
          <h1>Notifications</h1>
        </header>
        <AuthCard authObj={this.props.authObj}/>
      </div>
    )
  }
}

export default Auth;
