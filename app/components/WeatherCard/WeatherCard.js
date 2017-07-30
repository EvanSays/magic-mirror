import React from 'react'
import Skycons from 'react-skycons'

const WeatherCard  = (props) => {
  const { weatherObj } = props;

  let hourly = []
  if(weatherObj.hourly) {
    hourly = weatherObj.hourly.map((hour, i) => {
      return <div className="hourly" key={i*10}>
              <h2>{hour[0]}pm</h2>
              <Skycons className='icon'
                       color='white'
                       icon={hour[1]}
                       autoplay={true}/>
              <h2>{hour[2]}°</h2>
            </div>
    })
  }

  return(
    <div>
      <div className="current">
        <h2>{weatherObj.temp}°</h2>
        <Skycons className='icon'
                 color='white'
                 icon={weatherObj.icon}
                 autoplay={true}/>
      </div>
      <p>{weatherObj.city}</p>
      <div className="hourly-container">
        {hourly}
      </div>
    </div>
  )
}

export default WeatherCard
