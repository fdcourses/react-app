import React, { Component } from "react";
class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: "",
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  handleLogPasChange = (e) => {
    const {
      target: { name, value },
    } = e;
    this.setState({
      [name]: value,
    });
  };
  //   handlePasswordChange = (e) => {
  //     this.setState({
  //       password: e.target.value,
  //     });
  //   };
  render() {
    const { login, password } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleLogPasChange}
          value={login}
          name="login"
          type="text"
          placeholder="Login"
        />
        <input
          onChange={this.handleLogPasChange}
          value={password}
          name="password"
          type="password"
          placeholder="password"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default SignInForm;
