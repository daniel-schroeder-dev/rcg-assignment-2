import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ValidationBanner from './ValidationBanner';
import Instructions from './Instructions';
import CharBox from './CharBox';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
  }

  handleInputTextChange = e => {
    const text = e.target.value;
    this.setState((state, props) => {
      state.inputText = text;
      return state;
    });
  };

  handleRemoveChar = i => {
    this.setState((state, props) => {
      state.inputText = state.inputText.split('')
      state.inputText.splice(i, 1);
      state.inputText = state.inputText.join('');
      return state;
    });
  };

  render() {

    const charList = this.state.inputText.split('').map((text, i) => (
      <CharBox key={uuidv4()} char={text} i={i} handleRemoveChar={this.handleRemoveChar} />
    ));

    return (
      <div className="app">
        <h1 className="app__page-title">Assignment Two - React Complete Guide</h1>
        <div className="app__assignment-container">
          <ValidationBanner textLength={this.state.inputText.length} />
          <input className="app__text-input" type="text" value={this.state.inputText} onChange={this.handleInputTextChange} />
          <p>Text length: {this.state.inputText.length}</p>
          <div className="char-list">
            {charList}
          </div>
        </div>
        <Instructions />
      </div>
    );  
  }
  
}

export default App;
