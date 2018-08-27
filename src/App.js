import React, { Component } from 'react';
import Home from './pages/home/';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'

import SignUp from './pages/signUp/'

class App extends Component {
  render() {
    return (
      <Router history={BrowserRouter}>
        <React.Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/signUp" component={SignUp} />
        </React.Fragment>
      </Router>

    );
  }
}

export default App;
