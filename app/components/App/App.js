import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer'
import NewsContainer from '../../containers/NewsContainer'
import DateTodayContainer from '../../containers/DateTodayContainer'

class App extends Component {
  constructor() {
    super()
  }


  render(){
    return(
      <div>
        <WeatherContainer />
        <DateTodayContainer />
        <NewsContainer />
      </div>
    )
  }
}

export default App;
