import { connect } from 'react-redux';
import Weather from '../components/Weather/Weather';
import { fetchWeatherData, fetchTimeDate} from '../actions'

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

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
