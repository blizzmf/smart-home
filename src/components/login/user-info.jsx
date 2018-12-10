import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'reactstrap';
import './login.css';

export const UserInfoUI = ({ loggedInUser }) => {
  if (!loggedInUser) {
    return null;
  }
  return (
    <Form action="/logout" method="POST">
      <span>{loggedInUser} </span>
      <Button>Logout</Button>
    </Form>
  );
};

UserInfoUI.propTypes = {
  loggedInUser: PropTypes.string,
};

UserInfoUI.defaultProps = {
  loggedInUser: null,
};


const mapStateToProps = state => ({
  loggedInUser: state.session && state.session.username,
});

const UserInfo = connect(mapStateToProps)(UserInfoUI);

export default UserInfo;