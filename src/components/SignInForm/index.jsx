import React, { Component } from 'react';

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

    e.target.reset();
  };

  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input 
        // onChange={} TASK написать обработчик который будет брать значение инпута  и изменять стейт 
        value={login} 
        name="login" 
        type="text" 
        placeholder="Login" />
        <input
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
