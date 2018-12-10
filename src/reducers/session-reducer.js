import { cookies } from '../utils/cookies';
import { REFRESH_SESSION } from '../actions/session-actions';

const getInitialUser = () => cookies.get('username');

export const sessionReducer = (state = getInitialUser() || {}, action = {}) => {
  switch (action.type) {
    case REFRESH_SESSION:
      return {
        username: getInitialUser()
      }
    default:
      return state;
  }
};
