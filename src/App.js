import React, { Component } from 'react';
import './App.css';
import Home from './Containers/Home.js'
import Navbar from './Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="whole-app">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
