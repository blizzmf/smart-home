import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './toggle-temperature.css'

export class ToggleTemperature extends Component {
  static propTypes = {
    areaName: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    onMouseUp: PropTypes.func,
  }
  static defaultProps = {
    expiredDatetime: undefined,
    className: undefined,
    onChange: () => null,
    onMouseUp: () => null,
  }

  componentWillReceiveProps(props) {
    this.setState({
      value: props && props.value,
    });
  }

  state = {
    value: this.props.value,
  };

  onChange = (e) => {
    const { areaName, onChange } = this.props;
    const newValue = e.target.value;
    onChange(areaName, newValue);
  };
  
  render() {
    return (
      <div className="slidecontainer">
          <input type="range" min="0" max="35" value={this.props.value} className="slider-temperature" onChange={this.onChange} onMouseUp={this.props.onMouseUp}/>
      </div>
    );
  }
}
