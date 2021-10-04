import { Component } from 'react';
import PropTypes from 'prop-types';

class Aloha extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGreeting: true,
    };
  }

  switchState = () => {
    this.setState({
      isGreeting: !this.state.isGreeting,
    });
  };

  render() {
    const {
      user: { id, name, surName, isSelected, important },
      selectUser
    } = this.props;

    const fullName = `${name} ${surName}`.trim();

    const { isGreeting } = this.state;

    const styles = {
      color: isSelected ? 'green' : 'black',
      border: isSelected ? '2px solid black' : '2px solid transparent',
    };

    return (
      <section style={styles}>
        <h1>
          {isGreeting ? 'Привет' : 'Пока'} {fullName} {`${important}`}
        </h1>
        {isGreeting ? (
          <button onClick={this.switchState}>Сменить</button>
        ) : null}
        <button onClick={() => selectUser(id)}>Выбрать</button>
      </section>
    );
  }
}


export const userObj = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
}

// Aloha.defaultProps = {
//   selectUser : () => {},
//   user: {
//     id: 500,
//     name: "КИНЬ ПРОПСЫ",
//     surName: "УМНИК",
//     isSelected: false,
//     important: "А ТО БЕЗ ПРЕМИИ ОСТАНЕШСЯ"
//   }
// }

Aloha.propTypes = {
  selectUser : PropTypes.func,
  user: PropTypes.shape(userObj).isRequired,
}

export default Aloha;
