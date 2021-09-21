import React, { Component } from 'react';

class SelectedUsersList extends Component {
  render() {
    const { users } = this.props;

    return (
      <ul>
        {users.map((user) => {
          return (
            user.isSelected && (
              <li key={user.id}>
                {user.name} {user.surName}
              </li>
            )
          );
        })}
      </ul>
    );
  }
}

export default SelectedUsersList;
