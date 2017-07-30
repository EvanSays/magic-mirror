import { connect } from 'react-redux'
import NewsCard from '../components/NewsCard/NewsCard'
// import { fetchNewsData } from '../actions'

const mapStateToProps = (state) => {
  return {
    newsObj: state.setNewsData
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(NewsCard)
