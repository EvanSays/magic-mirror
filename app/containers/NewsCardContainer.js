import { connect } from 'react-redux'
import NewsCard from '../components/NewsCard/NewsCard'
import { fetchNewsData } from '../actions'

const mapStateToProps = (state) => {
  return {
    state
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getNewsData: () => {
//       dispatch(fetchNewsData())
//     }
//   }
// }

export default connect(mapStateToProps, null)(NewsCard)
