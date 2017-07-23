import React, { Component } from 'react'
import Skycons from 'react-skycons'

class Weather extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
      this.props.getWeatherData();
  }

  render(){
    let hourly = []
    if(this.props.weatherObj.hourly) {
      hourly = this.props.weatherObj.hourly.map((hour, i) => {
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
          <h2>{this.props.weatherObj.temp}°</h2>
          <Skycons className='icon'
                   color='white'
                   icon={this.props.weatherObj.icon}
                   autoplay={true}/>
        </div>
        <p>{this.props.weatherObj.city}</p>
        <div className="hourly-container">
          {hourly}
        </div>
      </div>
    )
  }
}

export default Weather;
