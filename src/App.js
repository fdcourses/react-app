import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CONSTANTS from './constants';
import { ThemeContext, UserContext } from './contexts';
import MainPage from './pages/MainPage';
import Calendar from 'components/Calendar';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInForm';
import ToDo from 'components/Forms/ToDo';
const { THEMES } = CONSTANTS;

function App(props) {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [user] = useState({
    id: 1,
    fullName: 'User Userovich',
    userImg:
      'https://www.ikea.com/kr/en/images/products/jaettelik-soft-toy-dinosaur-dinosaur-velociraptor__0814802_pe772713_s5.jpg?f=undefined',
  });
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <UserContext.Provider value={user}>
          <nav>
            <ul style={{display: 'flex', justifyContent: 'space-evenly', listStyle: 'none'}}>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/sign-in">SIGN IN</Link>
              </li>
              <li>
                <Link to="/sign-up">SIGN UP</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/sign-in" component={SignInPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/form" component={ToDo} />
          </Switch>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
