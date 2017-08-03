import moment from 'moment'

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
    this.daily = obj.daily.data.map(day => {
      return Object.assign({}, { high: Math.ceil(day.apparentTemperatureMax), low: Math.ceil(day.apparentTemperatureMin), icon: day.icon, day: moment.unix(day.time).format("ddd") } )
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
