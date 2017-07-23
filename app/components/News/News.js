import React, { Component } from 'react'
import PropTypes from 'prop-types';

class News extends Component {
  constructor() {
    super()
  }

  componentDidMount(){
    this.props.getNewsData();
  }

  render(){
    const { newsObj } = this.props;

    let article = [];
    if(newsObj.articles) {
      article = newsObj.articles.map((news, i) => {
        return <div className="wrapper" key={i*10}>
                 <div className="header">
                   <h3>News</h3>
                   <p>|</p>
                   <h2>{news.title}</h2>
                 </div>
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

News.propTypes = {
  newsObj: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default News;
