import { connect } from 'react-redux'
import News from '../components/News/News'
import { fetchNewsData } from '../actions'

const mapStateToProps = (state) => {
  return {
    newsObj: state.setNewsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsData: () => {
      dispatch(fetchNewsData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(News)
