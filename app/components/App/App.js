import React, { Component } from 'react'

import WeatherContainer from '../../containers/WeatherContainer'

class App extends Component {
  constructor() {
    super()
  }

  render(){
    return(
      <div>
        <WeatherContainer/>
      </div>
    )
  }
}

export default App;
