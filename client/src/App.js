import React, { Component } from 'react';
import { Phone,Display } from './UIComponents/Phone/Layout'
import { Keyboard } from './UIComponents/Phone/Keyboard'

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
	  this.setState({ input })
	  
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
