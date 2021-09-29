import React, { Component } from 'react';
import { getUsers } from './../../api';
class UserLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isError: false,
      isLoading: true,
      currentPage: 1,
    };
  }

  load = () => {
    const { currentPage } = this.state;
    getUsers({ page: currentPage })
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((error) => {
        this.setState({
          isError: true,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  componentDidMount() {
    this.load();
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentPage } = this.state;
    if (currentPage !== prevState.currentPage) {
      this.load();
    }
  }

  prevPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage - 1,
    });
  };
  nextPage = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  render() {
    const { users, isError, isLoading } = this.state;

    const userList = users.map((user) => (
      <div key={user.login.uuid}>{user.name.first}</div>
    ));

    return (
      <div>
        <h1>USER LIST</h1>
        <button onClick={this.prevPage}>прошлая страница</button>
        <button onClick={this.nextPage}>следующая страница</button>
        {isError ? <h1>ERROR</h1> : null}
        {isLoading ? <h1>LOADING ...</h1> : null}
        {users.length ? userList : null}
      </div>
    );
  }
}

export default UserLoader;
