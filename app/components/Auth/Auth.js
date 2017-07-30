import React, {Component} from 'react'
import runOauth from '../../../oauth.js'

class Auth extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    runOauth()
  }


  render() {
    console.log('authobj', this.props);
    return (
      <div className='github'>
        <header>
          <img src='https://www.dropbox.com/s/9jz8m1brvz34wul/github_icon_white.png?dl=1' alt=""/>
        </header>
        <img src="https://www.dropbox.com/s/mca48dde51yoal6/pull_request_icon_white.png?dl=1" alt=""/>
        <button onClick={() => this.props.getAuthData()}>Login</button>
      </div>
    )
  }
}

export default Auth;
