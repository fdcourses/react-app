import { Component } from 'react';
import styles from './stopwatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };

    this.intervalId = null;
  }

  start = () => {
    if (!this.intervalId) {
      this.intervalId = setInterval(this.tick, 1000);
    }
  };

  tick = () => {
    const { time } = this.state;
    const newTime = new Date(time.getTime() + 1000);

    this.setState({
      time: newTime,
    });
  };

  stop = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  reset = () => {
    this.stop();
    this.setState({
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    });
  };

  componentDidMount() {
    this.start();
    console.log(styles);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { time } = this.state;



    return (
      <article className={styles.flexContainer}>
        <h1 className={styles.name}>{time.toLocaleTimeString('ru-Ru')}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </article>
    );
  }
}

export default StopWatch;
