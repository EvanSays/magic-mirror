import { setNewsData } from '../newsReducer';

describe('setNewsData  reducer', () => {
  it('Should return an initial state', () => {
    expect(setNewsData(undefined, {})).toEqual([]);
  });

  it('Should not affect state ', () =>{
    const dataState = setNewsData([], {type: "NOT_EXISTS"})
    expect(dataState).toEqual([])
  })

  it('Should return an updated state if given an action', () => {
    const emptyState = setNewsData(undefined, {});

    const news = [{author: "Tess Townsend",
                       description: "Get ready, nerds!",
                       publishedAt: "2017-07-23T21:30:10Z" }]

    const dataState = setNewsData(news, {type: "NEWS_DATA", newsData: news})

    expect(emptyState).toEqual([]);

    expect(dataState).toEqual(news);
  });
});
