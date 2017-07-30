import React from 'react';
import { mount } from 'enzyme';
import TestUtils from 'react-dom/test-utils'
import { createRenderer } from 'react-test-renderer/shallow'
import DateToday from './DateToday'

describe('DateToday component tests', () => {
  const myMock = jest.fn();
  const wrapper = mount(<DateToday getDateTodayData={myMock} dateObj={[]}/>)

  it('should render a component', () => {
    expect(wrapper.find('.date').length).toEqual(1)
  })

  it.skip('should call a function on componentDidMount', () => {
    console.log(wrapper.debug());
    expect(myMock).toHaveBeenCalledTimes(1)
  })
})
