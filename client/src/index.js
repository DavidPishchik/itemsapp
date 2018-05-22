import React from 'react';
import './index.css';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import logger from 'redux-logger';

const  thunk = require('redux-thunk').default;


// const logger = createLogger();


const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
