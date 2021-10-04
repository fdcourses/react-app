import React from 'react';
import cx from 'classnames';
import { UserContext, ThemeContext } from '../../contexts';
import styles from './Header.module.scss';
import CONSTANTS from '../../constants';
const { THEMES } = CONSTANTS;

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {(theme) => {

        const headerClasses = cx(styles.container, {
          [styles.darkTheme]: theme === THEMES.DARK,
          [styles.lightTheme]: theme === THEMES.LIGHT,
        });
        return (
          <UserContext.Consumer>
            {(user) => {
              return (
                <header className={headerClasses}>
                  <h1>Hello {user.fullName}</h1>{' '}
                  <img
                    src={user.userImg}
                    alt="user pic"
                    style={{ width: '60px' }}
                  />
                </header>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
