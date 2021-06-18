import React from 'react';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/about">
                <About />
              </Route>

            </Switch>
          </div>
            );
  }
}

export default App;