import React, {Component} from 'react'
import moment from 'moment'
import PropTypes from 'prop-types';

class DateToday extends Component {
  constructor(){
    super()
  }

  componentDidMount() {
    setInterval(() => {
      this.props.getDateTodayData()
    },1000)
  }

  render(){
    const { dateObj } = this.props;
    return(
      <div className="date">
        <h1>{dateObj[0]}</h1>
        <h2>{dateObj[1]}</h2>
      </div>
    )
  }
}

DateToday.propTypes = {
  dateObj: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

export default DateToday;
