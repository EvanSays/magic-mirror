import { combineReducers } from 'redux';
import { setWeatherData } from './weatherReducer'
import { setNewsData } from './newsReducer'

export default combineReducers({
  setWeatherData,
  setNewsData
});
