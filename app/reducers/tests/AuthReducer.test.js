import {setAuthData} from '../AuthReducer';

describe('setAuthData  reducer', () => {
  it('Should return an initial state', () => {
    expect(setAuthData(undefined, {})).toEqual([]);
  });

  it('Should not affect state', () => {
    const dataState = setAuthData([], {type: "NOT_EXISTS"})
    expect(dataState).toEqual([])
  })

  it('Should return an updated state if given an action', () => {
    const emptyState = setAuthData(undefined, {});

    const authObj = [{
      "title" : "Update README.md",
      "avatar" : "https://avatars0.githubusercontent.com/u/20492875?v=4",
      "created" : "2017-07-26T21:55:43Z",
      "action" : "opened",
      "number" : 47
    }]
    const dataState = setAuthData(authObj, {type: 'DATE_TODAY_DATA'});

    expect(emptyState).toEqual([]);
    expect(dataState).toEqual(authObj);
  });
});
