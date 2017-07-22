import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer'
import NewsContainer from '../../containers/NewsContainer'
import DateTodayContainer from '../../containers/DateTodayContainer'
import GifsContainer from '../../containers/GifsContainer'

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
        <GifsContainer />
      </div>
    )
  }
}

export default App;
