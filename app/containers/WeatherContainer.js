import { connect } from 'react-redux';
// import { loginUser, fetchLoginUser, loggedIn } from '../actions';
import Weather from '../components/Weather/Weather';
import { fetchWeatherData, fetchTimeDate } from '../actions'

const mapStateToProps = (state) => {
  return {
    weatherObj: state.setWeatherData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: () => {
      dispatch(fetchWeatherData())
    },
    getTimeDate: () => {
      dispatch(fetchTimeDate())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
