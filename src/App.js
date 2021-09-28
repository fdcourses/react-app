import React from 'react';
import { Component } from 'react';
import FlexContainer from './components/FlexContainer';
import Grid from './components/Grid';
import Col from './components/Grid/Col';
import Row from './components/Grid/Row';

function List(props) {
  const { children } = props;

  return <ul style={{ border: '10px solid red' }}>{children}</ul>;
}

class App extends Component {
  render() {
    return (
      <FlexContainer
        justifyContainer="space-between"
        alignItems="flex-start"
        column
      >
        <a href="#">first</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">5</a>
      </FlexContainer>
    );
  }
}

export default App;
