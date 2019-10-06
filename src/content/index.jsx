import React from 'react';
import ReactDOM from 'react-dom';
import {
  MuiThemeProvider,
} from '@material-ui/core/styles';

import App from './App';
import {
  APP_ELEMENT_ID,
} from './constants';
import IndeedTheme from './themes/indeed';
import CommonTheme from './themes/common';

let theme = CommonTheme;

const app = document.createElement('div');
app.id = APP_ELEMENT_ID;
if (window.location.host === 'www.linkedin.com') {
  // The widget should live on the right-hand side of the screen, with a width of 250px, and be 20px from the right-edge of screen
  app.setAttribute('style', 'position: fixed; left: calc(100% - 270px); top: 75px; padding-right: 20px; min-width: 270px;');

  if (document.getElementsByClassName('nav-main__content').length) {
    document.getElementsByClassName('nav-main__content')[0].appendChild(app);
  } else {
    document.body.prepend(app);
  }
} else if (window.location.host === 'www.indeed.com') {
  theme = IndeedTheme;
  // The widget should live on the right-hand side of the screen, with a width of 250px, and be 20px from the right-edge of screen
  app.setAttribute('style', 'position: fixed; left: calc(100% - 270px); top: 75px; padding-right: 20px; min-width: 270px;');

  if (document.getElementById('gnav-main-container')) {
    document.getElementById('gnav-main-container').appendChild(app);
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
