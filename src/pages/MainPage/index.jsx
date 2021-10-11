import React, { Component } from 'react';
import StopWatch from 'components/StopWatch';
import Header from 'components/Header';
import UserLoader from 'components/UserLoader';
import Chat from 'components/Chat';

class MainPage extends Component {
  render() {
    return (
      <>
       <Chat />
      </>
    );
  }
}

export default MainPage;
