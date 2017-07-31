import React from 'react';
import { shallow } from 'enzyme';
import News from './News'
import fetchMock from 'fetch-mock'

describe('News component tests', () => {

  const myMock = jest.fn();
  const wrapper = shallow(<News getNewsData={myMock}/>)

  it('should render a component', () => {
    expect(wrapper.find('NewsCard').length).toEqual(1)
  })

  it('should call a function on componentWillMount', () => {
    expect(myMock).toHaveBeenCalledTimes(1)
  })
})
