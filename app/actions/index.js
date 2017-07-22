import { WeatherData, NewsData, DarkSkyData, GifyData } from '../data/scrubbers'
import { wundergroundKey, newsApiKey, darkSkyKey, gifyKey } from '../data/apiKeys'
import moment from 'moment'

export const fetchWeatherData = () => {
  return(dispatch) => {
    fetch(`http://api.wunderground.com/api/${wundergroundKey}/forecast/conditions/hourly/q/CO/Denver.json`)
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

export const fetchDarkSkyData = () => {
  return(dispatch) => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${darkSkyKey}/39.750784,-104.996579`)
      .then(res => {
        if(!res.ok) {
          throw Error(res.statusText)
        }
        return res
      })
    .then(res => res.json())
    .then(data => dispatch(setWeatherData(new DarkSkyData(data))))
  }
}

export const fetchNewsData = () => {
  return(dispatch) => {
    fetch(`https://newsapi.org/v1/articles?source=recode&apiKey=${newsApiKey}`)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
    .then(res => res.json())
    .then(data => {
      return dispatch(setNewsData(new NewsData(data)))

    })
  }
}

export const fetchGifyData = () => {
  console.log('in hereer');
  return(dispatch) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${gifyKey}&limit=1`)
    .then(res => {
      if(!res.ok) {
        throw Error(res.statusText)
      }
      return res
    })
    .then(res => res.json())
    .then(data => {
      dispatch(setGifyData(new GifyData(data)))
    })
  }
}

export const setGifyData = (dataObj) => {
  console.log(dataObj);
  return {
    type: 'GIFY_DATA',
    gifyData: dataObj
  }
}

export const fetchDateTodayData = () => {
  return(dispatch) => {
    const day = moment().format('dddd');
    const time = moment().format('h:mm:ss a');

    dispatch(setDateTodayData([day,time]))
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
