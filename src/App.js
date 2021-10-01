import React from 'react';
import { Component } from 'react';
// import UserLoader from './components/UserLoader';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import CounterPage from './pages/CounterPage';
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
            <li>
              <Link to="/counter">counter</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/counter" component={CounterPage}/>

          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const NotFound = () => <div>404 NO FOUND</div>;

export default App;
