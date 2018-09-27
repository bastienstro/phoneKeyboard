import React, { Component } from 'react';
import { Phone,Display } from './UIComponents/Phone/Layout'
import { Keyboard } from './UIComponents/Phone/Keyboard'
import { getSuggestions } from './actions'

class App extends Component {
	
  constructor(props) {
	  super(props)
	  this.state = {
		  input : '',
		  suggestions : []
	  }
  }	
  
  addNumber = (number) => {
	  const input = this.state.input + number
	  this.updateState(input)
  }
  
  removeNumber = () => {
	  const input = this.state.input.slice(0, -1)
	  this.updateState(input)
  }
  
  updateState = async (input) => {
    /* we fetch here the suggestions based on our input number */
	  /* we slice to 5 for UI purposes, you can see the hole result in the console */
	  const suggestions = await getSuggestions(input)
	  this.setState({ 
  	  input, 
  	  suggestions : suggestions.slice(0,5) 
  	})
	  console.log(suggestions)
	   
  }
	
  render() {
    return (
      <Phone >
      	<Display value={this.state.input}  />
      	<Keyboard suggestions={this.state.suggestions} onBack={() => this.removeNumber()} onNumber={(number) => this.addNumber(number)}/>
      </Phone>
    );
  }
}

export default App;
