import { Component } from 'react';
import Aloha, {userObj} from '../Aloha';
import PropTypes from 'prop-types';


class AlohaList extends Component {
  render() {
    const { users, ...rest } = this.props;

    return (
      <section>
        {users.map((user) => (
          <Aloha key={user.id} user={user} {...rest} />
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
