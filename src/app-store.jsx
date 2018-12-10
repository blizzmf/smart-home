import { createStore as createReduxStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

const createStore = initialState => createReduxStore(rootReducer, initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default createStore;
