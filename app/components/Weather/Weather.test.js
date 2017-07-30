import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
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
