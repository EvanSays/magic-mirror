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
        return <div className="hourly" key={i*10}>
                <img src={hour[0]} alt="icon"/>
                <h2>{hour[1]}</h2>
              </div>
      })
    }

    return(
      <div className="weather">
        <div className="current">
          <h2>{this.props.weatherObj.temp}</h2>
          <img src={this.props.weatherObj.icon} alt="icon"/>
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
