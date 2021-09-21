import { Component } from 'react';
import AlohaList from '../AlohaList';
import userDb from './../../users';
import SelectedUsersList from './../selected-users/selected-users' 

class AlohaDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReverseSortOrder: false,
      users: userDb.map((user) => ({ ...user, isSelected: false })),
    };
  }

  sortArray = () => {
    const { users, isReverseSortOrder } = this.state;

    const newUsers = users.slice();

    newUsers.reverse();

    this.setState({
      isReverseSortOrder: !isReverseSortOrder,
      users: newUsers,
    });
  };

  selectUser = (selectedUserId) => {
    const { users } = this.state;

    const newUsers = users.slice();

    this.setState({
      ...this.state,
      users: newUsers.map((user) => ({
        ...user,
        isSelected: user.id === selectedUserId ? !user.isSelected : user.isSelected,
      })),
    });
  };

  render() {
    const { users, isReverseSortOrder } = this.state;

    return (
      <article>
        <SelectedUsersList users={users} />
        <h1>
          Сейчас порядок сортировки {isReverseSortOrder ? 'Обратный' : 'Прямой'}
        </h1>
        <button onClick={this.sortArray}>Сменить порядок</button>
        <AlohaList users={users} selectUser={this.selectUser}/>
      </article>
    );
  }
}

export default AlohaDashboard;
