import { WeatherData, NewsData } from '../data/scrubbers'
import { wundergroundKey, newsApiKey } from '../data/apiKeys'
import moment from 'moment'

export const fetchWeatherData = () => {
  return(dispatch) => {
    fetch(`http://api.wunderground.com/api/${wundergroundKey}/conditions/hourly/q/CO/Denver.json`)
      .then(res => {
        if(!res.ok) {
          throw Error(res.statusText)
        }
        return res
      })
    .then(res => res.json())
    .then(data => dispatch(setWeatherData(new WeatherData(data))))
  }
}

export const fetchNewsData = () => {
  return(dispatch) => {
    fetch(`https://newsapi.org/v1/articles?source=bbc-news&apiKey=${newsApiKey}`)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
    .then(res => res.json())
    .then(data => dispatch(setNewsData(new NewsData(data))))
  }
}

export const fetchDateTodayData = () => {
  return(dispatch) => {
    dispatch(setDateTodayData(moment().format('dddd, h:mm:ss a')))
  }
}

export const setDateTodayData = (dataObj) => {
  return {
    type: 'DATE_TODAY_DATA',
    dateTodayData: dataObj
  }
}


export const setNewsData = (dataObj) => {
  return {
    type:'NEWS_DATA',
    newsData: dataObj
  }
}

export const setWeatherData = (dataObj) => {
  return {
    type: 'WEATHER_DATA',
    weatherData: dataObj
  }
}

export const setTimeData = (dataObj) => {
  return {
    type: 'TIME_DATA',
    timeData: dataObj
  }
}
