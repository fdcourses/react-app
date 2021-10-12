import React, { Component, useState } from 'react';
import styles from './SignInForm.module.scss';

import { SIGN_IN_SCHEMA } from 'utils/validationSchemas';

const goodSumbit = {
  email: 'andrey@mail.ru',
  password: '1Q#e0000',
  remember: 'remember',
};

const badSubmit = {
  email: '21345test',
  password: 'test@test.text',
  remember: '',
};

function SignInForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemembering, setIsRemembering] = useState(false);
  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };
  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };
  const handleRemember = () => {
    setIsRemembering(!isRemembering);
  };

  try {
    console.log(SIGN_IN_SCHEMA.isValidSync(goodSumbit));
    console.log(SIGN_IN_SCHEMA.validateSync(badSubmit));
  } catch (error) {
    console.log(error);
  }
  return (
    <form className={styles.container}>
      <input
        name="email"
        value={email}
        onChange={handleEmail}
        placeholder="email"
      />
      <input
        name="password"
        value={password}
        onChange={handlePassword}
        placeholder="password"
      />
      <label>
        <input
          type="checkbox"
          name="remember"
          value={isRemembering ? 'remember' : ''}
          checked={isRemembering}
          onChange={handleRemember}
        />
        Запомнить меня
      </label>
      <button>Login</button>
    </form>
  );
}

export default SignInForm;
