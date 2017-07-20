import WeatherData  from '../data/scrubbers'

export const fetchWeatherData = () => {
  return(dispatch) => {
    fetch('http://api.wunderground.com/api/5b20db7ab5eb91e9/conditions/hourly/q/CO/Denver.json')
      .then(res => {
        if(!res.ok) {
          throw Error(res.statusText)
        }
        return res
      })
      .then(res => res.json())
      .then(data => {
        const weatherObj = new WeatherData(data)
        dispatch(setWeatherData(weatherObj))
      })
  }
}

export const fetchTimeDate = () => {
  return(dispath) => {
    const now = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const day = days[ now.getDay() ];
    const month = months[ now.getMonth() ];
    const date = now.getDate()
    return [day,month,date];
    // NOTE: NEED TO DISPATCH TO ANOTHER ACTION AND SET IT TO STATE WITH PROPS DOWN
  }
}

export const setWeatherData = (data) => {
  return {
    type: 'WEATHER_DATA',
    weatherData: data
  }
}

export const fetchMovieData = (url) => {
  return (dispatch) => {
    dispatch(fetchIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(fetchIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(moviesFetchDataSuccess(items)))
      .catch(() => dispatch(fetchHasErrored(true)));
  };
};
