import { connect } from 'react-redux'
import DateToday from '../components/DateToday/DateToday'
import { fetchDateTodayData } from '../actions'

const mapStateToProps = (state) => {
  return {
    dateObj: state.setDateTodayData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDateTodayData: () => {
      dispatch(fetchDateTodayData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateToday)
