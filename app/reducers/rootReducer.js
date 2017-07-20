import { combineReducers } from 'redux';
import { setWeatherData, setNewsData } from './weatherReducer'

export default combineReducers({
  setWeatherData,
  setNewsData
});
