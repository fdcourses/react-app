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
      return <h1>{state.error.message}</h1>;
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

  getPicture = () => {
    return new Promise((res, rej) => {
      res(
        'https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined'
      );
    });
  };

  renderPic = (state) => {
    return <div style={{width: '400px'}}>
      <img src={state.data} alt="pic" style={{display:'block', width: '100%'}}/>
    </div>;
  };

  render() {
    return (
      <div>
        <DataProvider loadData={this.getNotebooks}> 
          {this.renderBooks}
        </DataProvider>
        {/* <DataProvider loadData={this.getUsers} test={this.renderUsers} />
        <DataProvider loadData={this.getPicture} test={this.renderPic} /> */}
      </div>
    );
  }
}

export default LoaderPage;
