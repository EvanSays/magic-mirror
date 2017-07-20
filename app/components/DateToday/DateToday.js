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
      <div>
        <h1>{this.props.dateObj}</h1>
      </div>
    )
  }
}

export default DateToday;
