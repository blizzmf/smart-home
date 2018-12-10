import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { refreshSession } from '../../actions/session-actions';
import TableArea from '../table/table';
import { getData } from '../../actions/data-action';
import { changeTab } from '../../actions/data-action';

export class HeatingUI extends React.Component {

  static propTypes = {
    username: PropTypes.string,
  };

  componentDidMount() {
    this.props.getData('heating')
  }

  componentWillMount = () => {
    this.props.refreshSession();
  };

  componentWillUnmount = () => {
    this.props.changeTab();
  }

  render() {
    return <TableArea 
    areaData={Object.values(this.props.tableData) } 
    isDefaultToggler={false} 
    typeOfTab='heating'
    preload={this.props.preload} />
  }
}


const mapStateToProps = state => ({
  username: state.session && state.session.username,
  tableData: state.data && state.data.tableData,
  preload: !!(state.data && state.data.tableData && Object.keys(state.data.tableData).length == 0)
});

const mapDispatchToProps = dispatch => ({
  refreshSession: () => dispatch(refreshSession()),
  getData: (tab) => dispatch(getData(tab)),
  changeTab: () => dispatch(changeTab())
});

const Heating = connect(mapStateToProps, mapDispatchToProps)(HeatingUI);

export default Heating;
