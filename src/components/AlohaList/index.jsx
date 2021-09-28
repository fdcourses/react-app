import { Component } from 'react';
import Aloha, {userObj} from '../Aloha';
import PropTypes from 'prop-types';


class AlohaList extends Component {
  render() {
    const { users, selectUser } = this.props;

    return (
      <section>
        {users.map((user) => (
          <Aloha key={user.id} user={user} selectUser={selectUser} />
        ))}
      </section>
    );
  }
}

AlohaList.propTypes = {
  selectUser: PropTypes.func,
  users: PropTypes.arrayOf(PropTypes.shape(userObj))
}

export default AlohaList;
