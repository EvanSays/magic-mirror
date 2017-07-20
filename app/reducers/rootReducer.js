import { combineReducers } from 'redux';
import { setWeatherData } from './weatherReducer'
import { setNewsData } from './newsReducer'
import { setDateTodayData } from './dateTodayReducer'

export default combineReducers({
  setWeatherData,
  setNewsData,
  setDateTodayData
})
