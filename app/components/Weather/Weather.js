import React, { Component } from 'react'


class Weather extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.getWeatherData();
    this.props.getNewsData();
    this.props.getTimeDate();

  }

  render(){

    console.log(this.props.newsObj);
    return(
      <h1>WEATHER</h1>
    )
  }
}

export default Weather;
