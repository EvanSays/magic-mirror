export const setWeatherData = (state = [], action) => {
  switch (action.type) {
  case 'WEATHER_DATA' :
    return action.weatherData;
  default:
    return state;
  }
};
