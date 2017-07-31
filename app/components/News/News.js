import React, { Component } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import PropTypes from 'prop-types';

class News extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getNewsData();
    }, 1000 * 60 * 30)
  }

  componentWillMount(){
    this.props.getNewsData();
  }

  render(){
    const { newsObj } = this.props;
    return(
      <NewsCard newsObj={newsObj}/>
    )
  }
}

News.propTypes = {
  newsObj: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default News;
