import React, { Component } from 'react'
import NewsCardContainer from '../../containers/NewsCardContainer'
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
    
    return(
      <NewsCardContainer newsObj={newsObj}/>
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
