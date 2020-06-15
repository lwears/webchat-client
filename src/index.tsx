import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import WebSocketProvider from './WebSocket';

import './index.css';
import App from './App';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4484f5',
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <WebSocketProvider>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </WebSocketProvider>
  </Provider>,
  document.getElementById('root')
);
