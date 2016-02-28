'use strict';
import React, { Component } from 'react';

import HelloMessage from './components/hello_message';

export default class App extends Component {
  render() {
    return (
      <div>
        <HelloMessage name="John"/ >
      </div>
    );
  }
}
