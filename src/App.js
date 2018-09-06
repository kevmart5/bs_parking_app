import React, { Component } from 'react';
import Home from './pages/home/';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import SignUp from './pages/signUp/'
import Main from './pages/mainPage/';
import Profile from './pages/profile/';
import Reserve from './pages/reserve/';
import ReserveSpaces from './pages/reserveSpaces/';

class App extends Component {
  render() {
    return (
      <Router history={BrowserRouter}>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/assign-spaces" component={Reserve} />
          <Route exact path="/reserve-space" component={ReserveSpaces}/>
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
