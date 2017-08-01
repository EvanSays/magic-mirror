import React from 'react';
import * as actions from './index'
import fetchMock from 'fetch-mock'
import { wundergroundKey, newsApiKey, darkSkyKey, gifyKey } from '../data/apiKeys'
import { mockDarkSkyRaw, mockNewsRaw, mockGifyRaw, mockGithubRaw, mockDateTodayResult, mockAuthRaw} from './mock_data.js'

describe('Action tests', () => {

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore()
  })

  it('should fetch Dark Sky weather data', () => {

    const dispatch = (action) => { action }

    const url = `https://api.darksky.net/forecast/${darkSkyKey}/39.750784,-104.996579`

    fetchMock.get( url, {
      status: 200,
      body: mockDarkSkyRaw
    });

    const darkSkyData = actions.fetchDarkSkyData()

    darkSkyData(dispatch)

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.lastUrl()).toEqual(url)
  })

  it('should fetch news data', () => {

    const dispatch = (action) => { action }

    const url = `https://newsapi.org/v1/articles?source=recode&apiKey=${newsApiKey}`

    fetchMock.get( url, {
      status: 200,
      body: mockNewsRaw
    });

    const newsData = actions.fetchNewsData()

    newsData(dispatch)

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.lastUrl()).toEqual(url)
  })

  it('should fetch Gify data', () => {

    const dispatch = (action) => { action }

    const url = `http://api.giphy.com/v1/gifs/random?api_key=${gifyKey}`

    fetchMock.get( url, {
      status: 200,
      body: mockGifyRaw
    });

    const gifyData = actions.fetchGifyData()

    gifyData(dispatch)

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.lastUrl()).toEqual(url)
  })

  it.skip('should fetch Auth data', () => {

    const dispatch = (action) => { action }

    const token = '56d9a159761006de704cecd5100efda0cad14663'

    window.localStorage.setItem('githubAccessToken', token)

    const url = `https://api.github.com/user?access_token=${token}`

    fetchMock.get( url, {
      status: 200,
      body: mockGithubRaw
    });

    const authData = actions.fetchAuthData();

    authData(dispatch)

    expect(fetchMock.called()).toEqual(true)
    expect(fetchMock.lastUrl()).toEqual(url)
  })

  it('should return AuthData', () => {
    const authArray = {type: 'AUTH_DATA', authData: mockAuthRaw}
    expect(actions.setAuthData(mockAuthRaw)).toEqual(authArray)
  })

  it('should return NewsData', () => {
    const newsObj = { type: 'NEWS_DATA', newsData: mockNewsRaw }
    expect(actions.setNewsData(mockNewsRaw)).toEqual(newsObj)
  })

  it('should return DateTodayData', () => {
    const dateObj = { type: 'DATE_TODAY_DATA', dateTodayData: mockDateTodayResult }
    expect(actions.setDateTodayData(mockDateTodayResult)).toEqual(dateObj)
  })

  it('should return weatherData', () => {
    const weatherObj = { type: 'WEATHER_DATA', weatherData: mockDarkSkyRaw }
    expect(actions.setWeatherData(mockDarkSkyRaw)).toEqual(weatherObj)
  })
})
