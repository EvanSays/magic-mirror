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
  'clear-day': 'Sun',
  'clear-night': 'Moon',
  'partly-cloudy-day': 'Cloud-Sun',
  'partly-cloudy-night': 'Cloud-Moon',
  'cloudy': 'Cloud',
  'rain': 'Cloud-Rain',
  'sleet': 'Cloud-Snow',
  'snow': 'Sowflake',
  'wind': 'Wind',
  'fog': 'Cloud-Fog-Alt'
}
