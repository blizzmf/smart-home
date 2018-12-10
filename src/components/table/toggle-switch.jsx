import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './toggle-switch.css'

export class ToggleSwitch extends Component {
  static propTypes = {
    areaName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    expiredDatetime: undefined,
    className: undefined,
    onChange: () => null,
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props && props.value,
    });
  }

  state = {
    value: this.props.value,
  };

  onChange = () => {
    const { areaName, onChange } = this.props;
    const newValue = !this.state.value;
    onChange(areaName, newValue);
  };
  
  render() {
    return (
      <label className="switch">
        {this.props.value ?
          <input type="checkbox" onChange={this.onChange} checked></input>
          :
          <input type="checkbox" onChange={this.onChange}></input>
        }
        <span className="slider round"></span>
      </label>
    );
  }
}
