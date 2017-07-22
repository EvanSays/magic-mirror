import { combineReducers } from 'redux';
import { setWeatherData } from './weatherReducer'
import { setNewsData } from './newsReducer'
import { setDateTodayData } from './dateTodayReducer'
import { setGifyData } from './gifyReducer'

export default combineReducers({
  setWeatherData,
  setNewsData,
  setDateTodayData,
  setGifyData
})
