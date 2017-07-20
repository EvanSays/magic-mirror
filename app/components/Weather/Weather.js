import React, { Component } from 'react'


class Weather extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getWeatherData();
    this.props.getTimeDate();
    // console.log(day, month, date);

  }

  render(){
    // console.log(this.props.weatherObj);
    return(
      <h1>WEATHER</h1>
    )
  }
}

export default Weather;
