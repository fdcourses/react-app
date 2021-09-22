import React, { Component } from "react";
class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.intervalId = null;
  }
  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };

  tick = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  };
  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  reset = () => {
    this.stop();
    this.setState = ({ counter: 0 });
  };
  componentDidMount() {
    this.start();
  }
  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { counter } = this.state;
    return (
      <article>
        <h1> {counter}</h1>
        <button onClick={this.start}> Start </button>
        <button onClick={this.stop}> Stop</button>
        <button onClick={this.reset}> Reset</button>
      </article>
    );
  }
}
export default StopWatch;
