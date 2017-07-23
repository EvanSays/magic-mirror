import React, { Component } from 'react'

class Gifs extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getGifyData();
  }

  render(){
    let gifUrl = []
    if(this.props.gifyObj) {
      gifUrl = this.props.gifyObj.url

    }

    return(
      <div className="gif">
        <img src={gifUrl} alt="random gif"/>
      </div>
    )
  }
}

export default Gifs;
