import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';

class App extends Component {
  state = {
    currentString: ""
  }

  updateText = (e) => {
    this.setState({ currentString: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateText}></input>
        <p>{this.state.currentString}</p>
        <ValidationComponent length={this.state.currentString.length} />
      </div>
    );
  }
}

export default App;
