import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from './WeatherCard'
import fetchMock from 'fetch-mock'

describe('WeatherCard component tests', () => {

  const weatherObj = {
  "city": "Denver",
  "icon": "CLEAR_DAY",
  "temp": 87,
  "hourly": [
    [
      "6",
      "CLEAR_DAY",
      87
    ],
    [
      "7",
      "RAIN",
      84
    ],
    [
      "8",
      "RAIN",
      81
    ]
  ],
  "daily": [
    {
      "high": 90,
      "low": 63,
      "icon": "rain",
      "day": "Wed"
    },
    {
      "high": 75,
      "low": 60,
      "icon": "rain",
      "day": "Thu"
    },
    {
      "high": 91,
      "low": 59,
      "icon": "partly-cloudy-day",
      "day": "Fri"
    },
    {
      "high": 91,
      "low": 69,
      "icon": "rain",
      "day": "Sat"
    },
    {
      "high": 71,
      "low": 61,
      "icon": "rain",
      "day": "Sun"
    },
    {
      "high": 71,
      "low": 60,
      "icon": "rain",
      "day": "Mon"
    },
    {
      "high": 77,
      "low": 58,
      "icon": "rain",
      "day": "Tue"
    },
    {
      "high": 77,
      "low": 60,
      "icon": "partly-cloudy-day",
      "day": "Wed"
    }
  ]
}

  const myMock = jest.fn();
  const wrapper = shallow(<WeatherCard weatherObj={weatherObj}/>)

  it('should render current weather data', () => {
    const temp = wrapper.find('.current h2')
    const icon = wrapper.find('.current .icon')

    expect(temp.text()).toEqual('87°')
    expect(icon.length).toEqual(1)
  })

  it('should render 8 daily weather data', () => {
    const daily = wrapper.find('.daily')

    expect(daily.length).toEqual(8)
  })
})
