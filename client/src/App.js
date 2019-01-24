import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HourBtn from './components/hourSlot';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="text-center mb-3">Welcome to the Scheduling App<i className="far fa-calendar-alt ml-2"></i></h1>
        <h4 className="text-center mb-2">Select a time</h4>
        <HourBtn/>
      </div>
    );
  }
}

export default App;
