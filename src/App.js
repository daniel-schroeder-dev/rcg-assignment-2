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
    
    const newInputText = e.target.value;
    const oldInputText = this.formatInputText();

    this.setState((state, props) => {

      const modifiedIndex = oldInputText.split('').findIndex((c, i) => c !== newInputText[i]);

      if (newInputText.length < oldInputText.length) {
        state.inputText.splice(modifiedIndex, 1);
      } else if (newInputText.length > oldInputText.length && modifiedIndex > -1) {
        const char = newInputText.split('')[modifiedIndex];
        state.inputText.splice(modifiedIndex, 0, { char: char, uuid: uuidv4() });
      } else {
        const char = newInputText.split('').pop();
        state.inputText.push({ char: char, uuid: uuidv4() });
      }
      
      return state;
 
    });
  
  };

  formatInputText = () => {
    return this.state.inputText.map(text => text.char).join('');
  };

  handleRemoveChar = uuid => {
    this.setState((state, props) => {
      state.inputText = state.inputText.filter(text => text.uuid !== uuid);
      return state;
    });
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
