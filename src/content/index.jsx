import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const app = document.createElement('div');
app.id = 'telescope';
document.getElementsByClassName('job-search-ext')[0].prepend(app);


ReactDOM.render(<App />, app);
