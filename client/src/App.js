import React, { Component } from 'react';
import { PhoneButton,BackButton } from './UIComponents/Phone/Buttons'

class App extends Component {
	
  render() {
    return (
      <div className="App">
        <PhoneButton number={1} letters={"abc"}>dsfsd</PhoneButton>
        <BackButton number={1} letters={"abc"}>dsfsd</BackButton>
      </div>
    );
  }
}

export default App;
