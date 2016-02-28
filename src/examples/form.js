'use strict';
import React, { Component } from 'react';

import Form from './components/Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(form) {
    alert(JSON.stringify(form)); // eslint-disable-line no-alert
  }

  render() {
    return (
      <div>
        <Form onClick={this.onClick}/ >
      </div>
    );
  }
}
