import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import Router from './routes/index';
import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

