import { connect } from 'react-redux';
import Auth from '../components/Auth/Auth';
import { fetchAuthData } from '../actions'

const mapStateToProps = (state) => {
  return {
    authObj: state.setAuthData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAuthData: () => {
      dispatch(fetchAuthData())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
