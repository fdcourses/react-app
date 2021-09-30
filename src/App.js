import React from 'react';
import { Component } from 'react';
// import UserLoader from './components/UserLoader';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

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
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;
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
