import React, { Component } from 'react'

class News extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getNewsData();
  }

  render(){
    let article = [];

    if(this.props.newsObj.articles) {
      article = this.props.newsObj.articles.map((news, i) => {
        return <div className="wrapper" key={i*10}>
                 <div className="header">
                   <h3>{news.author}</h3>
                   <h2>{news.title}</h2>
                 </div>
                 <p>{news.description}</p>
               </div>
      })
    }


    return(
      <div className="news">
      {article}
      </div>
    )
  }
}

export default News;
