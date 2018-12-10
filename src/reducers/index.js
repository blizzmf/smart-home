import { combineReducers } from 'redux';
import { confirmationModalReducer } from './confirmation-reducer';
import { sessionReducer } from './session-reducer';
import { dataReducer } from './data-reducer';

const rootReducer = combineReducers({
  confirmation: confirmationModalReducer,
  session: sessionReducer,
  data: dataReducer,
});

export default rootReducer;
