import React, { useContext, useState, useCallback, useMemo } from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { ThemeContext, UserContext } from '../../contexts';

const { THEMES } = CONSTANTS;

function computeValue(number) {
  let  i = 0;

  for(let j = 0; j < 1_000_000_000; j++) {
    i++;
  }

  return number ** 2;
}

const Header = (props) => {
  const [theme, setTheme] = useContext(ThemeContext);
  const {fullName, userImg } = useContext(UserContext);
  const [value, setValue] = useState(2);

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });
  
  const changeValue = (e) => setValue(Number(e.target.value));

  const changeTheme = () => setTheme(otherTheme);

  // const newValue = computeValue(value);

  const newValue = useMemo(()=> {return computeValue(value)}, [value]);

  // useEffect(()=> {

  // })

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  return (
    <header className={headerClasses}>
      <h1>{newValue}</h1>
      <img src={userImg} alt="user pic" style={{ width: '60px' }} />
      <button onClick={changeTheme}>SWITHC THEME</button>

      <input value={value} onChange={changeValue} />
    </header>
  );
};

export default Header;
