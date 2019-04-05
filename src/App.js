import React, { Component } from 'react';
import ValidationComponent from './ValidationComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ValidationComponent length="4" />
      </div>
    );
  }
}

export default App;
