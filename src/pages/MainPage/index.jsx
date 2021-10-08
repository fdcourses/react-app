import React, { Component } from 'react';
import StopWatch from 'components/StopWatch';
import Header from 'components/Header';
import UserLoader from 'components/UserLoader';

class MainPage extends Component {
  render() {
    return (
      <>
       <UserLoader />
      </>
    );
  }
}

export default MainPage;
