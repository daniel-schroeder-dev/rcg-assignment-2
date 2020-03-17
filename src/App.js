import React from 'react';
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
    this.setState({ inputText: e.target.value });
  };

  render() {

    const charList = this.state.inputText.split('').map(char => (
      <CharBox char={char} />
    ));

    return (
      <div className="app">
        <div className="app__assignment-container">
          <ValidationBanner textLength={this.state.inputText.length} />
          <input type="text" value={this.state.inputText} onChange={this.handleInputTextChange} />
          <p>Text length: {this.state.inputText.length}</p>
          {charList}
        </div>
        <Instructions />
      </div>
    );  
  }
  
}

export default App;
