import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing';
import Mission from './components/mission';
import Motivation from './components/motivation';
import Mentors from './components/mentors';
import Fitness from './components/fitness';
import Workouts from './components/workouts';
import Bio from './components/bio';
import Contact from './components/contact';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Mission/>
        <Motivation/>
        <Mentors/>
        <Fitness/>
        <Bio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
