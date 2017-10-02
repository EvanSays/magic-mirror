import React from 'react'

const WeatherCard = (props) => {

  const { weatherObj } = props;
  
  let daily = [];
  let currentHigh = [];
  let currentLow = [];
  
  if (weatherObj.daily) {
    currentHigh = weatherObj.daily[0].high;
    currentLow = weatherObj.daily[0].low;

    daily = weatherObj.daily.map((day, i) => {

      const diff = (day.high - day.low) * 3;

      if(i === 0) {
        return <div className="daily" key={i * 10}>
          <div className='day-container'>
            <h2 className='day'>Today</h2>
          </div>
          <div className='high-low-container'>
            <h3>{day.high}</h3>
            <div className='graph' style={{height: diff+'px'}}></div>
            <h3>{day.low}</h3>
          </div>
        </div>
      } else {
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
      }
    })
  }
  
  return (
    <div>
      <div className="current">
        <h2>{weatherObj.temp}°</h2>
        <img className='icon' src={`./app/assets/icons/SVG/${props.weatherObj.icon}.svg`} alt="weather icon"/>
      </div>
      <p>{weatherObj.city}</p>
      <div className="daily-container">
        {daily}
      </div>
    </div>
  )
}

export default WeatherCard
