import React, { useState, useReducer } from 'react';
import reducer from './reducer';

const SignUpForm = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    password: '',
    birthday: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    const action = {
      value,
      name,
    };
    dispatch(action);
  };

  return (
    <form>
      <input name="nickName" value={state.nickName} onChange={handleChange} />
      <input name="firstName" value={state.firstName} onChange={handleChange} />
      <input name="lastName" value={state.lastName} onChange={handleChange} />
      <input name="password" value={state.password} onChange={handleChange} />
      <input name="email" value={state.email} onChange={handleChange} />
      <input name="birthday" value={state.birthday} onChange={handleChange} />
      <button>Submit form</button>
    </form>
  );
};

export default SignUpForm;
