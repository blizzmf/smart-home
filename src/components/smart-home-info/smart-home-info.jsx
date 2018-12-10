import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Jumbotron } from 'reactstrap';
import './smart-home-info.css';

export class SmartHomeInfoUI extends React.Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Container fluid>
        <div>
          <Jumbotron>
            <h1 className="display-3">Welcome to Smart home, <b>{this.props.username}</b></h1>
            <p className="lead">This application will allow you to manage your smart home.</p>
          </Jumbotron>
          <Jumbotron className="security">
            <h1 className="display-3">On the 'Security' tab you can control the alarm</h1>
          </Jumbotron>
          <Jumbotron className="light">
            <h1 className="display-3">Turning on / off lights in your home on the 'Light' tab</h1>
          </Jumbotron>
          <Jumbotron className="heating">
            <h1 className="display-3">Control the temperature in your home on the 'Heating' tab</h1>
          </Jumbotron>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  username: (state.session && state.session.username)
});


const SmartHomeInfo = connect(mapStateToProps)(SmartHomeInfoUI);

export default SmartHomeInfo;