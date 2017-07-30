import { setWeatherData } from '../weatherReducer';

describe('setWeatherData reducer', () => {
  it('Should return an initial state', () => {
    expect(setWeatherData(undefined, {})).toEqual([]);
  });

  it('Should not affect state', () => {
    const dataState = setWeatherData([], {type: "NOT_EXISTS"})
    expect(dataState).toEqual([]);
  })

  it('Should return an updated state if given an action', () => {
    const darkSkyData = {city: "Denver", icon: "PARTLY_CLOUDY_DAY", temp: 88}

    const emptyState = setWeatherData(undefined, {});
    const dataState = setWeatherData([], {type: "WEATHER_DATA", weatherData: darkSkyData})

    expect(emptyState).toEqual([]);
    expect(dataState).toEqual(darkSkyData);
  });
});
