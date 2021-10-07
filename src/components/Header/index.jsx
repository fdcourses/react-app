import React, { useContext } from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { ThemeContext, UserContext } from '../../contexts';
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const {fullName, userImg} = useContext(UserContext);

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  
  return (
    <header className={headerClasses}>
      <h1>Hello {fullName}</h1>
      <img src={userImg} alt="user pic" style={{ width: '60px' }} />
      <button onClick={() => setTheme(otherTheme)}>SWITHC THEME</button>
    </header>
  );
};

export default Header;
