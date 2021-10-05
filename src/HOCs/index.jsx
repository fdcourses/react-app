import { ThemeContext, UserContext } from '../contexts';

export const withTheme = (Component) => {
  return function ComponentWithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          return <Component theme={theme} setTheme={setTheme} {...props}/>;
        }}
      </ThemeContext.Consumer>
    );
  };
};

export const withUser = (Component) => {
  return function CompWithUser(props) {
    return (
      <UserContext.Consumer>
        {(user) => {
          return <Component user={user} {...props} />;
        }}
      </UserContext.Consumer>
    );
  };
};