import { connect } from 'react-redux';
// import { loginUser, fetchLoginUser, loggedIn } from '../actions';
import Weather from '../components/Weather/Weather';
import { fetchWeatherData, fetchTimeDate, fetchNewsData } from '../actions'

const mapStateToProps = (state) => {
  return {
    weatherObj: state.setWeatherData,
    newsObj: state.setNewsData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: () => {
      dispatch(fetchWeatherData())
    },
    getTimeDate: () => {
      dispatch(fetchTimeDate())
    },
    getNewsData: () => {
      dispatch(fetchNewsData())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
