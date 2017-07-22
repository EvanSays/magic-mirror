import React, { Component } from 'react'

class Gifs extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getGifyData();
  }

  render(){
    // let gifUrl = []
    // if(this.props.gifyObj) {
    // gifUrl = this.props.gifyObj.url
    // return <img src={gifUrl} alt=""/>
    // }

    return(
      <div className="news">

      </div>
    )
  }
}

export default Gifs;
