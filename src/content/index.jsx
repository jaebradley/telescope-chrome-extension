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
if (window.location.host === 'www.linkedin.com') {
  app.setAttribute('style', 'z-index: 10000; position: fixed; left: 80%; top: 75px; width: 20%;');

  if (document.getElementsByClassName('nav-main__content').length) {
    document.getElementsByClassName('nav-main__content')[0].appendChild(app);
  } else {
    document.body.prepend(app);
  }
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  app,
);
