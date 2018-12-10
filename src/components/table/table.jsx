import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Table } from 'reactstrap';
import { refreshSession } from '../../actions/session-actions';
import { saveData } from '../../actions/data-action';
import Preloader from '../preloader';
import { ToggleSwitch } from './toggle-switch';
import { ToggleTemperature } from './toggle-temperature';
import './table.css';

export class TableUI extends React.Component {

  static propTypes = {
    areaData: PropTypes.array.isRequired,
    isDefaultToggler: PropTypes.bool.isRequired,
    typeOfTab: PropTypes.string.isRequired,
    refreshSession: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
    preload: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    areaData: undefined,
    isDefaultToggler: true
  }

  state = {
    areaData: this.props.areaData,
  }

  componentWillReceiveProps(props) {
    this.setState({
      areaData: props && props.areaData,
    });
  }

  componentWillMount = () => {
    this.props.refreshSession();
  };

  onSaveTemperature = () => {
    const { areaData, typeOfTab } = this.props;
    this.props.saveData(areaData, typeOfTab);
  }

  onChangeTogglerValue = (areaName, value) => {
    const areaData = this.state.areaData;
    areaData.filter(area => {
      if (area.areaName == areaName) {
        area.value = value;
        if (value && this.props.typeOfTab != 'heating') {
          const date = new Date();
          area.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
        } else {
          area.date = undefined;
        }
      }
    })
    this.setState({
      areaData
    })
    if (this.props.typeOfTab != 'heating') {
      this.props.saveData(areaData, this.props.typeOfTab);
    }
  };

  getTable = () => this.state.areaData
      .sort((a1, a2) => (a1.areaName.toLowerCase() < a2.areaName.toLowerCase() ? -1 : 1))
      .map((area, index) =>
        <tr key={area.areaName}>
          <td>{index + 1}</td>
          <td className={this.props.isDefaultToggler ? "table-area" : "table-heating-area"}>{area.areaName}</td>
          <td className={this.props.isDefaultToggler ? "table-status" : "table-heating-status"}>{this.props.isDefaultToggler ? this.renderSwitch(area.areaName, area.value) :
            this.renderSwitchTemperature(area.areaName, area.value)}</td>
          <td className={this.props.isDefaultToggler ? "table-date" : "table-heating-date"}>{this.props.isDefaultToggler && area.date || area.value}</td>
        </tr>
      );

  renderSwitch(areaName, value) {
    return (
      <div>
        <ToggleSwitch
          areaName={areaName}
          value={value}
          onChange={this.onChangeTogglerValue}
        />
      </div>
    );
  };

  renderSwitchTemperature(areaName, value) {
    return (
      <div>
        <ToggleTemperature
          areaName={areaName}
          value={value}
          onChange={this.onChangeTogglerValue}
          onMouseUp={this.onSaveTemperature}
        />
      </div>
    );
  };

  render() {
    if (this.props.preload) {
      return <Preloader />;
    }
    return (
      <div>
        
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Area</th>
              <th>Status</th>
              {this.props.isDefaultToggler && <th>Turned on</th> || <th>Temperature &deg;C</th>}
            </tr>
          </thead>
        </Table>
        <div>
          <Table>
            <tbody>
              {this.getTable()}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  refreshSession: () => dispatch(refreshSession()),
  saveData: (content, tab) => dispatch(saveData(content, tab)),
});

const TableArea = connect(null, mapDispatchToProps)(TableUI);

export default TableArea;