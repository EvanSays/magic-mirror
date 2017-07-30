import React from 'react'

const AuthCard = (props) => {
  console.log('authcard', props);
  const { authObj } = props;
  return (
    <div className='github'>
      <header>
        <div className='github-icon'></div>
        <img src='https://www.dropbox.com/s/9jz8m1brvz34wul/github_icon_white.png?dl=1' alt=""/>
      </header>
      <img src="https://www.dropbox.com/s/mca48dde51yoal6/pull_request_icon_white.png?dl=1" alt=""/>

    </div>
  )
}

export default AuthCard
