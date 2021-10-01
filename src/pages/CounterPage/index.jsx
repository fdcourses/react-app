import React, { Component } from 'react';
import Counter from '../../components/Counter';

class CounterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
    };
  }

  handleChange = ({ target: { value } }) => {
    this.setState({
      step: Number(value),
    });
  };

  render() {
    const { step } = this.state;
    return (
      <>
        <label>
          STEP: {step} <br />
          <input
            type="range"
            onChange={this.handleChange}
            value={step}
            min="1"
            max="50"
          />
        </label>
        <Counter step={step} />
      </>
    );
  }
}

export default CounterPage;
