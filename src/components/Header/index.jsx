import React, { useContext, useState, useCallback } from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { ThemeContext, UserContext } from '../../contexts';
import { useEffect } from 'react/cjs/react.development';

const { THEMES } = CONSTANTS;

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const { fullName, userImg } = useContext(UserContext);
  const [value, setValue] = useState(1);

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  // const logValue = () => {console.log(value)};
  const logValue = useCallback(() => {
    console.log(value);
  }, [value]);

  useEffect(() => {
    console.log('log value создался');
  }, [logValue]);

  const changeValue = useCallback(
    (e) => setValue(Number(e.target.value)),
    []
  );

  useEffect(() => {
    console.log('changeValue создался');
  }, [changeValue]);

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  const changeTheme = useCallback(() => setTheme(otherTheme), [otherTheme]);

  useEffect(() => {
    console.log('changeTheme создался');
  }, [changeTheme]);


  return (
    <header className={headerClasses}>
      <h1>Hello {fullName}</h1>
      <img src={userImg} alt="user pic" style={{ width: '60px' }} />
      <button onClick={changeTheme}>SWITHC THEME</button>
      <button onClick={logValue}>log value</button>
      <input value={value} onChange={changeValue} />
    </header>
  );
};

export default Header;
