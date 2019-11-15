import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from "react-intl";
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
      <IntlProvider locale="en">
          <App />
      </IntlProvider>
    </Provider>
    ,MOUNT_NODE
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
