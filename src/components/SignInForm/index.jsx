import React, { Component } from 'react';
import styles from  './SignInForm.module.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.setState({
      login: '',
      password: '',
    })
  };

  handleChange = (e) => {
    const {target : {name, value}} = e;
    
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { login, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleChange}
          value={login}
          name="login"
          type="text"
          placeholder="Login"
        />
        <input
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
