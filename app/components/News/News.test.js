import React from 'react';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import News from './News'

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
