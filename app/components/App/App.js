import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer'
import NewsContainer from '../../containers/NewsContainer'
import DateTodayContainer from '../../containers/DateTodayContainer'
import LoginContainer from '../../containers/LoginContainer'

class App extends Component {
  constructor() {
    super()
  }


  render(){
    return(
      <div className='wrapper'>
        <WeatherContainer />
        <DateTodayContainer />
        <NewsContainer />
        <LoginContainer />
      </div>
    )
  }
}

export default App;
