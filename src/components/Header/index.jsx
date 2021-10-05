import React from 'react';
import cx from 'classnames';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
import { withTheme, withUser } from '../../HOCs';
const { THEMES } = CONSTANTS;

const Header = (props) => {
  const { theme, setTheme, user } = props;

  const headerClasses = cx(styles.container, {
    [styles.darkTheme]: theme === THEMES.DARK,
    [styles.lightTheme]: theme === THEMES.LIGHT,
  });

  const otherTheme = theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;

  return (
    <header className={headerClasses}>
      <h1>Hello {user.fullName}</h1>
      <img src={user.userImg} alt="user pic" style={{ width: '60px' }} />
      <button onClick={() => setTheme(otherTheme)}>SWITHC THEME</button>
    </header>
  );
};

// const HeaderWithTheme = (props) => {
//   return (
//     <ThemeContext.Consumer>
//       {([theme, setTheme]) => {
//         return <Header theme={theme} setTheme={setTheme} />;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

const HeaderWithTheme = withTheme(Header);

const HeaderWithThemeAndUser = withUser(HeaderWithTheme);


export default HeaderWithThemeAndUser;
