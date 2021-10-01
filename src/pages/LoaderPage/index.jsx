import React, { Component } from 'react';
import DataProvider from '../../components/DataProvider';
// import {getUsers} from '../../api';

class LoaderPage extends Component {
  renderBooks = (state) => {
    return (
      <ul>
        {state.data.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    );
  };

  getNotebooks = () => {
    return fetch('/notebooks.json').then((res) => res.json());
  };

  renderUsers = (state) => {
    if (state.error) {
    }

    return (
      <div>
        {state.data.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  };

  getUsers = () => {
    return fetch('/users.json').then((res) => res.json());
  };

  render() {
    return (
      <div>
        <DataProvider loadData={this.getNotebooks} render={this.renderBooks} />
        <DataProvider loadData={this.getUsers} render={this.renderUsers} />
      </div>
    );
  }
}

export default LoaderPage;
