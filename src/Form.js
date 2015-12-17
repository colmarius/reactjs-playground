'use strict';
import React, { Component, PropTypes } from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      password: '',
    };
  }

  linkState() {
    return LinkedStateMixin.linkState.apply(this, arguments);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" valueLink={this.linkState('account')}
            ref="account" placeholder="account" />
        </div>
        <div>
          <input type="password" valueLink={this.linkState('password')}
            ref="password" placeholder="password" />
        </div>
        <div>
          <button onClick={() => this.props.onClick(this.state)}>
            click
          </button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired,
};
