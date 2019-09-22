import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const app = document.createElement('div');
app.id = 'telescope';
app.setAttribute('style', 'z-index: 10000; position: absolute; left: 80%; top: 0; width: 20%;');
document.getElementsByClassName('job-search-ext')[0].prepend(app);

ReactDOM.render(<App />, app);
