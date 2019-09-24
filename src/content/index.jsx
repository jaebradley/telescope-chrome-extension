import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';

import App from './App';
import {
  APP_ELEMENT_ID,
} from './constants';
import theme from './theme';

const app = document.createElement('div');
app.id = APP_ELEMENT_ID;
app.setAttribute('style', 'z-index: 10000; position: absolute; left: 80%; top: 0; width: 20%;');
document.getElementsByClassName('job-search-ext')[0].prepend(app);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  app,
);
