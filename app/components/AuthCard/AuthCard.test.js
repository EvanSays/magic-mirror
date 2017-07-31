import React from 'react';
import { shallow } from 'enzyme';
import AuthCard from './AuthCard'
import fetchMock from 'fetch-mock'

describe('AuthCard component tests', () => {

  const authArray = [
    {
      "title": "Update README.md",
      "avatar": "https://avatars0.githubusercontent.com/u/20492875?v=4",
      "created": "2017-07-26T21:55:43Z",
      "action": "opened",
      "number": 47
    }, {
      "title": "add local storage check logic on componentDidMount",
      "avatar": "https://avatars6.githubusercontent.com/u/24419273?v=4",
      "created": "2017-07-17T06:34:05Z",
      "action": "closed",
      "number": 46
    }
  ]

  const wrapper = shallow(<AuthCard authObj={authArray}/>)

  it('should render auth data', () => {
    expect(wrapper.find('h2').length).toEqual(1)
  })

  it('should return the correct information', () => {
    expect(wrapper.find('h2').text()).toEqual("Update README.md")
    expect(wrapper.find('h3').text()).toEqual("4 days ago")
  })
})
