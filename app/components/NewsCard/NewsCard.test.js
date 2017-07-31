import React from 'react';
import { shallow } from 'enzyme';
import NewsCard from './NewsCard'
import fetchMock from 'fetch-mock'

describe('NewsCard component tests', () => {

  const newsObj = {
    "articles": [
      {
        "author": "Kara Swisher",
        "title": "After Meg Whitman’s exit.",
        "description": "As the car-hailing company searches for cohesion, the former CEO has told some he is “Steve Jobs-ing it.”",
        "url": "https://www.recode.net/2017/7/30/16066332/uber-ceo-search-travis-kalanick-meg-whitman-steve-jobs-board",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Qs_wR_nqhfpb-gvV4BPIWml_kH8=/0x227:4256x2621/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/55970009/GettyImages_543406810.0.jpg",
        "publishedAt": "2017-07-31T03:09:22Z"
      }
    ]
  }

  const myMock = jest.fn();
  const wrapper = shallow(<NewsCard newsObj={newsObj}/>)

  it('should render a component', () => {
    expect(wrapper.find('.news').length).toEqual(1)
  })

  it('should return an articles title', () => {
    expect(wrapper.find('h2').text()).toEqual("After Meg Whitman’s exit.")
  })
})
