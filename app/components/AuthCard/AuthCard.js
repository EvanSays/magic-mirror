import React from 'react'
import moment from 'moment'

const AuthCard = (props) => {
  const { authObj } = props;
  const request = authObj.map((obj, i) => {
    if (obj.action === 'opened') {
      return <div className='wrapper' key={i}>
        <div className='icon-container'>
          <div className='pull-request-icon'></div>
        </div>
        <div className='info-container'>
            <h2>{obj.title}</h2>
          <div className='avatar-date-container'>
            <img className='avatar' src={obj.avatar} alt="user avatar"/>
            <h3>{moment(obj.created).fromNow()}</h3>
          </div>
        </div>
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
