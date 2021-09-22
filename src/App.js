import React from 'react';
import { Component } from 'react';
import StopWatch from './components/counter/stop-watch.jsx'
import SignInForm from './components/form/form.jsx'
class App extends Component {
  render() {
    return (
      <><StopWatch />
        <SignInForm />
      </>)
  }
}

export default App;
