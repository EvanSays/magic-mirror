import { setGifyData } from './gifyReducer';

describe('setGifyData  reducer', () => {
  it('Should return an initial state', () => {
    expect(setGifyData(undefined, {})).toEqual([]);
  });

  it('Should return an updated state if given an action', () => {
    const emptyState = setGifyData(undefined, {});
    const dataState = setGifyData(["url"], {type: 'GIFY_DATA', gifyData: "url"})

    expect(emptyState).toEqual([]);
    expect(dataState).toEqual("url");
  });
});
