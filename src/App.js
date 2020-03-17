import React from 'react';
import Instructions from './Instructions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleInputTextChange = e => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    return (
      <div className="app">
        <div className="app__assignment-container">
          <input type="text" value={this.state.inputText} onChange={this.handleInputTextChange} />
        </div>
        <Instructions />
      </div>
    );  
  }
  
}

export default App;
