import React, { Component } from 'react';
import styles from './SignInForm.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      isLoginCorrect: true,
      isPasswordCorrect: true,
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      login: '',
      password: '',
    });
  };

  handleChange = (e) => {
    const {
      target: { name, value },
    } = e;

    this.setState({
      [name]: value,
      [`is${name[0].toUpperCase()}${name.slice(1)}Correct`]:
        !value.includes(' '),
    });
  };

  render() {
    const { login, password, isLoginCorrect, isPasswordCorrect } = this.state;

    const loginClassNames = cx({
      [styles.correctInput]: isLoginCorrect,
      [styles.incorrectInput]: !isLoginCorrect,
    });
    const passwordClassNames = cx({
      [styles.correctInput]: isPasswordCorrect,
      [styles.incorrectInput]: !isPasswordCorrect,
    });
    //   ? styles.correctInput
    //   : styles.incorrectInput;
    // const passwordClassNames = isPasswordCorrect
    //   ? styles.correctInput
    //   : styles.incorrectInput;

    return (
      <form className={styles.container} onSubmit={this.handleFormSubmit}>
        <input
          className={loginClassNames}
          onChange={this.handleChange}
          value={login}
          name="login"
          type="text"
          placeholder="Login"
        />
        <input
          className={passwordClassNames}
          onChange={this.handleChange}
          value={password}
          name="password"
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignInForm;


/**
 * Функция для преобразования обьекта в строку классов
 * @param {object} stylesObj обьект, ключ которого соответствует строке класса, а значение - булевой переменной
 * @returns {string} Строка состоящая из ключей в обьекте, значения которых были истинны
 */
function cx(stylesObj) {
  const classTuples = Object.entries(stylesObj);

  const filteredClassTuples = classTuples.filter(
    ([className, boolValue]) => boolValue
  );

  const classNamesArray = filteredClassTuples.map(([className]) => className);

  let classNameString = classNamesArray.join(' ');

  return classNameString;
}

/* 
  {
    имяКласса : условие 
    имяКласса : условие 
    имяКласса : условие 
    имяКласса : условие 
    имяКласса : условие    
    имяКласса : условие 
            
  }

 вернуть строку с классами

*/
