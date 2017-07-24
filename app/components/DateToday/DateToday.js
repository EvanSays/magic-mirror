import React, {Component} from 'react'
import moment from 'moment'

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
    return(
      <div className="date">
        <h1>{this.props.dateObj[0]}</h1>
        <h2>{this.props.dateObj[1]}</h2>
      </div>
    )
  }
}

export default DateToday;
