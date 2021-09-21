import React, { Component } from 'react';

class SelectedUsersList extends Component {
  render() {
    const { users } = this.props;

    const selectedUsers = users.filter((user) => {
      return user.isSelected;
    });

    return (
      <ul>
        {selectedUsers.map((user) => (
          <li key={user.id}>
            {user.name} {user.surName}
          </li>
        ))}
      </ul>
    );
  }
}

export default SelectedUsersList;
