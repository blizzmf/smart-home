import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../login/login.jsx';
import SmartHomeInfo from '../smart-home-info/smart-home-info';
import { refreshSession } from '../../actions/session-actions';

export class HomePageUI extends React.Component {
  static propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
  };

  componentWillMount = () => {
    this.props.refreshSession();
  }

  render() {
    if(this.props.isUserLoggedIn){
      return <SmartHomeInfo />
    }
    return <Login />;
  }
}

const mapStateToProps = state => ({
  isUserLoggedIn: !!(state.session && state.session.username),
});

const mapDispatchToProps = dispatch => ({
  refreshSession: () => dispatch(refreshSession()),
});

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageUI);

export default HomePage;