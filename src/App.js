import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    currentString: ""
  }

  updateText = (e) => {
    this.setState({ currentString: e.target.value });
  }

  deleteLetter = (i) => {
    const currentString = this.state.currentString.split("");
    currentString.splice(i, 1);
    this.setState({ currentString: currentString.join("") });
  }

  render() {
    let chars = null;
    if (this.state.currentString.length > 0) {
      const stringArray = this.state.currentString.split("");
      chars = (<div>
        {stringArray.map((char, index) => {
          return <CharComponent letter={char} key={index} click={() => this.deleteLetter(index)} />
        })}
      </div>);
    }


    return (
      <div className="App">
        <input type="text" onChange={this.updateText} value={this.state.currentString}></input>
        <p>{this.state.currentString}</p>
        <ValidationComponent length={this.state.currentString.length} />
        {chars}
      </div>
    );
  }
}

export default App;
