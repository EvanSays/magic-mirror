import React, { Component } from 'react'
import WeatherContainer from '../../containers/WeatherContainer'
import NewsContainer from '../../containers/NewsContainer'

class App extends Component {
  constructor() {
    super()
  }


  render(){
    return(
      <div>
        <WeatherContainer />
        <NewsContainer />
      </div>
    )
  }
}

export default App;
