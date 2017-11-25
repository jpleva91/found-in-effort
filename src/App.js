import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Landing/>
      </div>
    );
  }
}

export default App;
