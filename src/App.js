import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Router, Route, browserHistory} from 'react-router';
import Home from './containers/Home';
import Giphy from './containers/Giphy';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
       <Route path='/' component={Home} />
       <Route path='/giphy' component={Giphy} />
      </Router>
    );
  }
}

export default App;
