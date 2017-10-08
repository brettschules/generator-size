import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'

class App extends Component {
  render() {
    return (
      <div>
        <p className="App-intro">
        <Home />
        </p>
      </div>
    );
  }
}

export default App;
