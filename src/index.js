import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './store/configureStore'
import { Provider } from 'react-redux'
import { register } from 'register-service-worker'

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

register();
