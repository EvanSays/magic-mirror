import React, { Component } from 'react'
import { render } from 'react-dom'

class Root extends Component {
  componentDidMount() {
    // INSERT API CALL TO YOUR INTERNAL API
  }

  render() {
    return (
      <div>Hello World</div>
    )
  }
}

render(<Root />, document.getElementById('main'))
