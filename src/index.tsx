import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import WebSocketProvider from './WebSocket';

import './index.css';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <WebSocketProvider>
      <App />
    </WebSocketProvider>
  </Provider>,
  document.getElementById('root')
);
