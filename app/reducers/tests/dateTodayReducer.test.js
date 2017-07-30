import { setDateTodayData } from '../dateTodayReducer';

describe('setDateTodayData  reducer', () => {
  it('Should return an initial state', () => {
    expect(setDateTodayData(undefined, {})).toEqual([]);
  });

  it('Should not affect state', () => {
    const dataState = setDateTodayData([], {type: "NOT_EXISTS"})
    expect(dataState).toEqual([])
  })

  it('Should return an updated state if given an action', () => {
    const emptyState = setDateTodayData(undefined, {});
    const dataState = setDateTodayData(["Sunday", "5:38:18 pm"], {type: 'DATE_TODAY_DATA'});

    expect(emptyState).toEqual([]);
    expect(dataState).toEqual(undefined);
  });
});
