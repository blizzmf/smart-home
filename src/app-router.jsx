import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './app.jsx';
import createStore from './app-store';

const store = createStore();

const mainComponent = () => <Provider store={store}><App /></Provider>;

const AppRouter = () => (
  <Router>
    <Route path="/" component={mainComponent} />
  </Router>
);

export default AppRouter;
