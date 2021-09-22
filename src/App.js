import React from 'react';
import { Component } from 'react';
import SignInForm from './components/SignInForm';
// import AlohaDashboard from './components/AlohaDashboard';
import StopWatch from './components/StopWatch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
  }

  toggleVisibility = () => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  render() {
    const { isVisible } = this.state;

    return (
      <>
        <button onClick={this.toggleVisibility}>Toggle</button>
        {isVisible && <StopWatch />}
        <SignInForm />
      </>
    );
  }
}

export default App;
