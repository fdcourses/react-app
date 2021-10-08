import React, { Component } from 'react';
import StopWatch from 'components/StopWatch';
import Header from 'components/Header';

class MainPage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <StopWatch />
        </main>
        <footer>test</footer>
      </>
    );
  }
}

export default MainPage;
