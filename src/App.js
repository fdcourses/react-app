import React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Tree from './components/Tree';
import { UserContext, ThemeContext } from './contexts';
import CONSTANTS from './constants';
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: THEMES.DARK,
      user: {
        id: 1,
        fullName: 'User Userovich',
        userImg:
          'https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined',
      },
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <UserContext.Provider value={this.state.user}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
