import { connect } from 'react-redux'
import Gifs from '../components/Gifs/Gifs'
import { fetchGifyData } from '../actions'

const mapStateToProps = (state) => {
  return {
    gifyObj: state.setGifyData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getGifyData: () => {
      dispatch(fetchGifyData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifs)
