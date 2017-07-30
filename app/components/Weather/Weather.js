import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Skycons from 'react-skycons'
import WeatherCardContainer from '../../containers/WeatherCardContainer'

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
    return(
      <div>
        <WeatherCardContainer/>
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
