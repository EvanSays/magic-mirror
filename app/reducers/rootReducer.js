import { combineReducers } from 'redux';
import { setWeatherData } from './weatherReducer'
import { setNewsData } from './newsReducer'
import { setDateTodayData } from './dateTodayReducer'
import { authReducer as auth } from 'redux-implicit-oauth2'

export default combineReducers({
  setWeatherData,
  setNewsData,
  setDateTodayData,
  auth
})
