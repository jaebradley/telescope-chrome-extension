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

// The widget should live on the right-hand side of the screen, with a width of 250px, and be 20px from the right-edge of screen
// Need z-index so widget doesn't get blocked on Indeed.com
const WIDGET_CONTAINER_STYLES = 'z-index: 1000; position: fixed; left: calc(100% - 270px); top: 75px; padding-right: 20px; min-width: 270px;';

const app = document.createElement('div');
app.id = APP_ELEMENT_ID;

if (window.location.host === 'www.linkedin.com') {
  app.setAttribute('style', WIDGET_CONTAINER_STYLES);

  if (document.getElementsByClassName('nav-main__content').length) {
    document.getElementsByClassName('nav-main__content')[0].appendChild(app);
  } else {
    document.body.prepend(app);
  }
} else if (window.location.host === 'www.indeed.com') {
  theme = IndeedTheme;
  app.setAttribute('style', WIDGET_CONTAINER_STYLES);

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
