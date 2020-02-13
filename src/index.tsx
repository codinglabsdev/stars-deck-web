import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/scss/main.scss';
import 'typeface-montserrat';
import 'typeface-fjalla-one';

import '~/config/ReactotronConfig';
import store from '~/store';

import GlobalStyle from '~/styles/global';

import App from '~/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
