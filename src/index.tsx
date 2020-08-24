import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './config/serviceWorker';
import './config/index.css'
import {store} from "./store/store";
import {ConnectedRouter} from "connected-react-router";
import HISTORY from "./variable/HISTORY";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <ConnectedRouter history={HISTORY}>
              <App />
          </ConnectedRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
