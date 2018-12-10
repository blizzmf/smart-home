import './login.css';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, Input, Button } from 'reactstrap';
import { refreshSession } from '../../actions/session-actions';

export class LoginUI extends React.Component {
  
  static propTypes = {
    refreshSession: PropTypes.func.isRequired,
  };

  state = {
    isRegistration: false,
  }
  componentWillMount = () => {
    this.props.refreshSession();
  }

  changeRegistrationFlag = () => () => this.setState(prevState => ({
    isRegistration: !prevState.isRegistration,
  }));

  render() {
    return (
      <div className='login-body'>
        <div className="login-container">
          {this.state.isRegistration ? <Form className="register-form input-position" action="/registration" method="POST">
            <FormGroup row>
            <Col className="logo" xs={9}><h1><b>Registration</b></h1></Col>
              <Col xs={9}>
                <div className="input-div">
                  <Input className="input-form" name="username" placeholder="username" />
                </div>
                <div className="input-div">
                  <Input className="input-form" name="password" type="password" placeholder="password" />
                </div>
                <div className="input-div">
                  <Input className="input-form" name="email" placeholder="email address" />
                </div>
              </Col>
            </FormGroup>
            <Button color="primary" className="but">Create</Button>
            <p className="message">Already registered? <a href="#" onClick={this.changeRegistrationFlag()}>Sign In</a></p>
          </Form>
            :
            <Form className="login-form input-position" action="/login" method="POST">
              <FormGroup row>
              <Col className="logo" xs={9}><h1><b>Smart Home</b></h1></Col>
                <Col xs={9}>
                  <div className="input-div">
                    <Input className="input-form" name="username" placeholder="username" />
                  </div>
                  <div className="input-div">
                    <Input className="input-form" name="password" type="password" placeholder="password" />
                  </div>
                </Col>
              </FormGroup>
              <Button color="primary" className="but">Login</Button>
              <p className="message">Not registered? <a href="#" onClick={this.changeRegistrationFlag()}>Create an account</a></p>
            </Form>
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  refreshSession: () => dispatch(refreshSession()),
});

const Login = connect(undefined, mapDispatchToProps)(LoginUI);

export default Login;

