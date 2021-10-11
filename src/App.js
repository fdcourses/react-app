import Calendar from 'components/Calendar';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CONSTANTS from './constants';
import { ThemeContext, UserContext } from './contexts';
import MainPage from './pages/MainPage';
const { THEMES } = CONSTANTS;

function App(props) {
  const [theme, setTheme] = useState(THEMES.DARK);
  const [user, setUser] = useState({
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

          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/calendar" component={Calendar} />
          </Switch>

          
          
        </UserContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
