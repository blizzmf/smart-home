import {
  TOGGLE_CONFIRMATION_MODAL_OPEN,
  OPEN_CONFIRMATION_MODAL,
} from '../actions/confirmation-actions';

export const confirmationModalReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case TOGGLE_CONFIRMATION_MODAL_OPEN:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case OPEN_CONFIRMATION_MODAL:
      return {
        ...state,
        isOpen: true,
        title: action.title,
        okHandler: action.okHandler,
        okButtonName: action.okButtonName,
        cancelHandler: action.cancelHandler,
        cancelButtonName: action.cancelButtonName,
      };
    default:
      return state;
  }
};
