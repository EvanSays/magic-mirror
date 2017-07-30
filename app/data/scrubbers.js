import moment from 'moment'

export class WeatherData{
  constructor(obj) {
    this.city = obj.current_observation.display_location.city,
    this.icon = weatherIconKeys[obj.current_observation.icon],
    this.temp = obj.hourly_forecast[0].temp.english,
    this.hourly = obj.hourly_forecast.slice(0,3).map(hour => {
      return [hour.FCTTIME.civil.slice(0, -3), weatherIconKeys[hour.icon], hour.temp.english]
    })
  }
}

export class NewsData{
  constructor(obj) {
    this.articles = obj.articles.slice(0,5)
  }
}

export class DarkSkyData{
  constructor(obj) {
    this.city = obj.timezone.slice(obj.timezone.indexOf('/') + 1),
    this.icon = darkSkyIconKeys[obj.currently.icon],
    this.temp = Math.ceil(obj.currently.temperature),
    this.hourly = obj.hourly.data.slice(1,4).map(hour => {
      return [ moment.unix(hour.time).format("h"), darkSkyIconKeys[hour.icon], Math.ceil(hour.apparentTemperature) ]
    })
  }
}

export class GifyData {
  constructor(obj) {
    this.url = obj.data.image_url
  }
}

export class AuthData {
  constructor(obj) {
    this.title = obj.payload.pull_request.title,
    this.avatar = obj.payload.pull_request.user.avatar_url,
    this.created = obj.payload.pull_request.created_at,
    this.action = obj.payload.action,
    this.number = obj.payload.number
  }
}

export const darkSkyIconKeys = {
  'clear-day': 'CLEAR_DAY',
  'clear-night': 'CLEAR_NIGHT',
  'partly-cloudy-day': 'PARTLY_CLOUDY_DAY',
  'partly-cloudy-night': 'PARTLY_CLOUDY_NIGHT',
  'cloudy': 'CLOUDY',
  'rain': 'RAIN',
  'sleet': 'SLEET',
  'snow': 'SNOW',
  'wind': 'WIND',
  'fog': 'FOG'
}

export const weatherIconKeys = {
  chanceofflurries: 'SNOW',
  chancerain: 'RAIN',
  chanceofsleet: 'SNOW',
  chanceofsnow: 'SNOW',
  chancetstorms: 'RAIN',
  tstorms: 'RAIN',
  clear: 'CLEAR_DAY',
  cloudy: 'CLOUDY',
  flurries: 'SLEET',
  hazy: 'FOG',
  fog: 'FOG',
  mostlycloudy: 'CLOUDY',
  mostlysunny: 'PARTLY_CLOUDY_DAY',
  partlycloudy: 'CLOUDY',
  partlysunny: 'PARTLY_CLOUDY_DAY',
  rain: 'RAIN',
  sleet: 'SLEET',
  snow: 'SNOW',
  sunny: 'CLEAR_DAY',
  thunderstorm: 'RAIN',
};
