import React from 'react';
import { mount } from 'enzyme';
import DateToday from './DateToday'
import fetchMock from 'fetch-mock'

describe('DateToday component tests', () => {

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  const myMock = jest.fn();
  const wrapper = mount(<DateToday getDateTodayData={myMock} dateObj={[]}/>)

  it('should render a component', () => {
    expect(wrapper.find('.date').length).toEqual(1)
  })

  it('should call a function on componentDidMount', async() => {
    await resolveAfter2Seconds()

    expect(myMock).toHaveBeenCalledTimes(1)
  })
})
