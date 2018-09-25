import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components'

injectGlobal`
  html,body {
    margin: 0;
    text-align:center;
    height:100%; 
  }
  #root{
	  height:100%;
  }
`

ReactDOM.render(<App />, document.getElementById('root'));
