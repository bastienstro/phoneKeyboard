import React, { Component } from 'react';
import { PhoneButton,BackButton } from './UIComponents/Phone/Buttons'
import { Phone,Screen,List,Keyboard } from './UIComponents/Phone/Layout'

class App extends Component {
	
  render() {
    return (
      <Phone >
      	<Screen />
      	<List />
      	<Keyboard>
        <BackButton  >dsfsd</BackButton>
        <PhoneButton number={2} letters={"abc"}>dsfsd</PhoneButton>
        <PhoneButton number={3} letters={"def"}>dsfsd</PhoneButton>
        <PhoneButton number={4} letters={"ghi"}>dsfsd</PhoneButton>
        <PhoneButton number={5} letters={"jkl"}>dsfsd</PhoneButton>
        <PhoneButton number={6} letters={"mno"}>dsfsd</PhoneButton>
        <PhoneButton number={7} letters={"pqrs"}>dsfsd</PhoneButton>
        <PhoneButton number={8} letters={"tuv"}>dsfsd</PhoneButton>
         <PhoneButton number={9} letters={"wxyz"}>dsfsd</PhoneButton>
       
        </Keyboard>
      </Phone>
    );
  }
}

export default App;
