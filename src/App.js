import React from 'react';
import { Component } from 'react';
import Tree from './components/Tree';
import { UserContext } from './contexts';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
      <UserContext.Provider value={this.state.user}>
        <Tree user={this.state.user} />
      </UserContext.Provider>
    );
  }
}

export default App;
