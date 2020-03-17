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
      inputText: [],
    };
  }

  handleInputTextChange = e => {
    const text = e.target.value;
    this.setState((state, props) => {
      if (text.length < this.formatInputText().length) {
        state.inputText.pop();
      } else {
        const char = text.split('').pop();
        state.inputText.push({ char: char, uuid: uuidv4() });
      }
      return state;
    });
  };

  formatInputText = () => {
    return this.state.inputText.map(text => text.char).join('');
  };

  handleRemoveChar = uuid => {
    // this.setState((state, props) => {
    //   state.inputText = state.inputText.filter(text => text.uuid !== uuid);
    //   return state;
    // });
  };

  render() {

    const charList = this.state.inputText.map(text => (
      <CharBox key={text.uuid} char={text.char} uuid={text.uuid} handleRemoveChar={this.handleRemoveChar} />
    ));

    return (
      <div className="app">
        <div className="app__assignment-container">
          <ValidationBanner textLength={this.state.inputText.length} />
          <input className="app__text-input" type="text" value={this.formatInputText()} onChange={this.handleInputTextChange} />
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
