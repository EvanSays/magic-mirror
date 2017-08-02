import React from 'react'
import Skycons from 'react-skycons'

const WeatherCard = (props) => {

  const { weatherObj } = props;

  let daily = [];
  let currentHigh = [];
  let currentLow = [];

  if (weatherObj.daily) {
    currentHigh = weatherObj.daily[0].high
    currentLow = weatherObj.daily[0].low

    daily = weatherObj.daily.slice(1,8).map((day, i) => {
      const diff = (day.high - day.low) * 3
      return <div className="daily" key={i * 10}>
        <div className='day-container'>
          <h2 className='day'>{day.day}</h2>
        </div>
        <div className='high-low-container'>
          <h3>{day.high}</h3>
          <div className='graph' style={{height: diff+'px'}}></div>
          <h3>{day.low}</h3>
        </div>
      </div>
    })
  }
  return (
    <div>
      <div className="current">
        <h2>{weatherObj.temp}°</h2>
        <div className="current-high-low">
          <h3>{currentHigh}H</h3>
          <h3>{currentLow}L</h3>
        </div>
        <Skycons className='icon' color='white' icon={weatherObj.icon} autoplay={true}/>
      </div>
      <p>{weatherObj.city}</p>
      <div className="daily-container">
        {daily}
      </div>
    </div>
  )
}

export default WeatherCard
