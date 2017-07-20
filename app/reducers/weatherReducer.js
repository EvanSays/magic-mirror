export const setWeatherData = (state = [], action) => {
  switch (action.type) {
  case 'WEATHER_DATA' :
    return action.weatherData;
  default:
    return state;
  }
};

export const setNewsData = (state = [], action) => {
  switch (action.type) {
  case 'NEWS_DATA' :
    return action.newsData;
  default:
    return state;
  }
}
