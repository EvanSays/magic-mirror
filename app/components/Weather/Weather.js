import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skycons from 'react-skycons'

class Weather extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getWeatherData();
    }, 1000 * 60 * 30)
  }
  componentWillMount(){
    this.props.getWeatherData();
  }


  render(){
    const { weatherObj } = this.props;
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
      <div className="weather">
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
}

Weather.propTypes = {
  weatherObj: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default Weather;
