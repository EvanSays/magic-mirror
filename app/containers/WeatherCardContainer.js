import { connect } from 'react-redux';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import { fetchDarkSkyData, fetchWeatherData } from '../actions'

const mapStateToProps = (state) => {
  return {
    weatherObj: state.setWeatherData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: () => {
      dispatch(fetchWeatherData())
    }
  };
};

export default connect(mapStateToProps, null)(WeatherCard);
