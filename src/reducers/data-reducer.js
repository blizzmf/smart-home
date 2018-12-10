import { RECEIVE_DATA, CHANGE_TAB } from '../actions/data-action';

export const dataReducer = (state = { tableData: {} }, action = {}) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        tableData: {},
      };
    case RECEIVE_DATA:
      return {
        tableData: action.data,
      };
    default:
      return state;
  }
};
