import React, { Component } from 'react';

class UserLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('/users.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isLoading: false,
        });
      });
  }

  render() {
    const { users, isLoading, error } = this.state;

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>{error.message}</div>;
    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserLoader;
