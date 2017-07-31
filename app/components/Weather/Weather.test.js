import React from 'react';
import { shallow } from 'enzyme';
import Weather from './Weather'

describe('Weather component tests', () => {
  const myMock = jest.fn();
  const wrapper = shallow(<Weather getWeatherData={myMock}/>)

  it('shound render a component', () => {
    expect(wrapper.find('WeatherCard').length).toEqual(1)
  })

  it('should call a function on componentWillMount', () => {
    expect(myMock).toHaveBeenCalledTimes(1)
  })
})
