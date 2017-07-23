import { connect } from 'react-redux';
import Weather from '../components/Weather/Weather';
import { fetchDarkSkyData } from '../actions'

const mapStateToProps = (state) => {
  return {
    weatherObj: state.setWeatherData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeatherData: () => {
      dispatch(fetchDarkSkyData())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
