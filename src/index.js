'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './examples/hello_message';

ReactDOM.render((
  <div>
    <h1>Hello React!</h1>
    <App />
  </div>
), document.getElementById('root'));
