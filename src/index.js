import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Router from 'utils/router';
import configureStore from 'utils/store';

import './assets/scss/app.scss';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
