'use strict';
import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsElapsed: 0
    };
  }

  tick() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1})
  }

  componentDidMount() {
    const thisTick = this.tick.bind(this)
    this.interval = setInterval(thisTick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
}

export default Timer;
