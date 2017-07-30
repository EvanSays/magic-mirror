import React from 'react'

const AuthCard = (props) => {
  const { authObj } = props;

  const request = authObj.map((obj, i) => {
      if(obj.action === 'opened') {
        return <div className='wrapper' key={i}>
          <div className='history'><div className='pull-request-icon'></div><h2>{obj.title}</h2></div>
          <div className='info'><img className='avatar' src={obj.avatar} alt="user avatar"/><h3>{obj.created}</h3></div>
        </div>
      }
  })
  return (
    <div>
      {request}
    </div>
  )
}

export default AuthCard
