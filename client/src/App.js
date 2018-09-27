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
  
  addNumber = async (number) => {
	  const input = this.state.input + number
	  const suggestions = await getSuggestions(input)
	  
	  this.setState({ input, suggestions })
	  
  }
  
  removeNumber = () => {
	  const input = this.state.input.slice(0, -1)
	  this.setState({ input })
  }
	
  render() {
    return (
      <Phone >
      	<Display value={this.state.input} />
      	<Keyboard onBack={() => this.removeNumber()} onNumber={(number) => this.addNumber(number)}/>
      </Phone>
    );
  }
}

export default App;
