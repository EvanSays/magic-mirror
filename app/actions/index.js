import { WeatherData, NewsData } from '../data/scrubbers'
import { wundergroundKey, newsApiKey } from '../data/apiKeys'

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

export const fetchTimeDate = () => {
  return(dispath) => {
    const now = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const day = days[ now.getDay() ];
    const month = months[ now.getMonth() ];
    const date = now.getDate()
    return [day,month,date];
    // NOTE: NEED TO DISPATCH TO ANOTHER ACTION AND SET IT TO STATE WITH PROPS DOWN
  }
}


export const setNewsData = (dataObj) => {
  console.log(dataObj);
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
