import React, { Component } from 'react'

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
        return <h2 key={i*10}>{hour}</h2>
      })
    }

    return(
      <div className="weather">
        <div className="current">
          <h2>{this.props.weatherObj.temp}</h2>
          <h2>icon{this.props.weatherObj.icon}</h2>
        </div>
        <p>{this.props.weatherObj.city}</p>
        <div className="hourly">
          {hourly}
        </div>
      </div>
    )
  }
}

export default Weather;
