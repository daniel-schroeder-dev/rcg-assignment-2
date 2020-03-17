import React from 'react';
import Instructions from './Instructions';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <div className="app__assignment-container">
          <input type="text" />
        </div>
        <Instructions />
      </div>
    );  
  }
  
}

export default App;
