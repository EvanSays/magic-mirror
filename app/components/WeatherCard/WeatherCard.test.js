import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherCard from './WeatherCard'
import fetchMock from 'fetch-mock'

describe('WeatherCard component tests', () => {

  const weatherObj = {
    "city": "Denver",
    "icon": "CLOUDY",
    "temp": "64",
    "hourly": [
      ["12:00", "CLOUDY", "64"]
    ]
  }

  const myMock = jest.fn();
  const wrapper = shallow(<WeatherCard weatherObj={weatherObj}/>)

  it('should render current weather data', () => {
    const temp = wrapper.find('.current h2')
    const icon = wrapper.find('.current .icon')

    expect(temp.text()).toEqual('64°')
    expect(icon.length).toEqual(1)
  })

  it('should render hourly weather data', () => {
    const hour = wrapper.find('.hourly h2').first()
    const temp = wrapper.find('.hourly h2').last()

    expect(hour.text()).toEqual("12:00")
    expect(temp.text()).toEqual("64°")
  })
})
