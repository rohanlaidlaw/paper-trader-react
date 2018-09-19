/* eslint-env browser */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import stockCards from './reducers/reducers';

const store = createStore(stockCards);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
