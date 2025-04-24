import React from 'react';
import ReactDOM from 'react-dom'; // React 17 compatible
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'aos/dist/aos.css';
import './index.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/Portfolio">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
