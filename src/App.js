import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  constructor(props) {  
    super(props);
    
    this.state = {
        // Place initial state here.
        // Only put the states shared across multiple components here in App.js
    };
  }

  // Place shared state altering functions here

  render() {
    return (
      // Pass props to Main as needed
      <div className="App">
          <Header />
          <Main />
      </div>
    );
  }
}

export default App;
