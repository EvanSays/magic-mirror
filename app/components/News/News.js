import React, { Component } from 'react'

class News extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getNewsData();
  }

  render(){
    console.log('newsObj', this.props.newsObj.articles);
    let article = [];

    if(this.props.newsObj.articles) {
      article = this.props.newsObj.articles.map(news => {
        return <div><h3>{news.author}</h3><p>{news.description}</p></div>
      })
    }


    return(
      <div>
      {article}
      </div>
    )
  }
}

export default News;
