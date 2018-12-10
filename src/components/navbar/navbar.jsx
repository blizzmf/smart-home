import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTab } from '../../actions/data-action';
import {
  Collapse,
  Navbar as NavbarComponent,
  NavbarToggler, NavbarBrand,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import UserInfo from '../login/user-info';

export class NavbarUI extends React.Component {

  static propTypes = {
    isUserLoggedIn: PropTypes.bool.isRequired,
  };

  state = {
    isOpen: false,
  }

  toggleOpen = () => this.setState(prevState => ({
    isOpen: !prevState.isOpen,
  }));

  clearTable = (selectedKey) => {
    this.props.changeTab();
    console.log(selectedKey.target, location.pathname)
  }

  render() {
    const { isUserLoggedIn } = this.props;
    return (
      <NavbarComponent expand="lg" light color="light" fixed={`top`}>
        <NavbarBrand tag={Link} to="/">Smart Home</NavbarBrand>
        {isUserLoggedIn && <NavbarToggler onClick={this.toggleOpen} className="navbar-toggler-right" />}
        {isUserLoggedIn &&
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar >
            <NavItem>
              <NavLink tag={Link} to="/security">Security</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/light">Light</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/heating">Heating</NavLink>
            </NavItem>
          </Nav>
          <div className="ml-auto">
            <UserInfo />
          </div>
        </Collapse>
        }
      </NavbarComponent>
    );
  }
}

const mapStateToProps = state => ({
  isUserLoggedIn: !!(state.session && state.session.username),
});

const mapDispatchToProps = dispatch => ({
  changeTab: () => dispatch(changeTab())
});

const Navbar = connect(mapStateToProps, mapDispatchToProps)(NavbarUI);

export default Navbar;