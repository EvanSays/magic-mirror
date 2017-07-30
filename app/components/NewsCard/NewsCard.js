import React from 'react'


const NewsCard  = (props) => {

  let article = [];
  if(props.newsObj.articles) {
    article = props.newsObj.articles.map((news, i) => {
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

export default NewsCard
