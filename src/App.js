import React from 'react';
import { Component } from 'react';
// import UserLoader from './components/UserLoader';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MainPage} />

          <Route path="/about">
            <AboutPage />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

// const Home = (props) => {
//   console.log(props);
//   return <div>Home</div>;
// };

const AboutPage = (props) => {
  console.log(props);
  return <div>About</div>;
};
const Contacts = () => <div>Contacts</div>;

const NotFound = () => <div>404 NO FOUND</div>;
// switch (url) {
//   case '/contacts': {
//     return <Contacts />
//   }

//   case '/about': {
//     return <About />
//   }

//   default:
//     break;
// }

/*
  1. pushState может менять урлу без обновления страницы
  2. когда он это делает запускается событие popstate
  3. на основе урлы можем условно ререндерить приложуху

  1. Механизм условного рендеринга
  2. Механизм для вызова pushState и ему надо передаввать наши url
  3. Компонент со стейтом, которйы будет заниматся ререндерингом

*/

export default App;
