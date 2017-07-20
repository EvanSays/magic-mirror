import React, { Component } from 'react'

class News extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getNewsData();
  }

  render(){

    return(
      <div>
        <h1>NEWS Component</h1>
      </div>
    )
  }
}

export default News
