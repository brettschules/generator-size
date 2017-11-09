import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home.js'
import Navbar from './Navbar.js'
import About from "./Components/About"
import Contact from "./Components/Contact"
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="whole-app">
        <Router>
          <div>
            <Navbar />
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
