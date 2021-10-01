import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    // if(nextState.value !== this.state.value ) {
    //   return true;
    // } else {
    //   return false;
    // }

    // return nextState.value !== this.state.value;
    return nextProps.step === this.props.step;
  }

  increment = () => {
    this.setState({ value: this.state.value + this.props.step });
  };
  decrement = () => {
    this.setState({ value: this.state.value - this.props.step });
  };

  render() {
    const { value } = this.state;

    console.log('counter');
    return (
      <div>
        <p>Count: {value} {this.props.step}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

Counter.propTypes = {
  step: PropTypes.number.isRequired,
};

const state = {
  test: true
}

const newState = {
   test: true
}

export default Counter;
