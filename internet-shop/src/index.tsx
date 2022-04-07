import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './core/redux/store';
import { Global } from './GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
