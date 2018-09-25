import React from 'react';
import { PhoneButton,Button } from './Buttons'
import {List} from './Layout'




export const Keyboard=({onBack,onNumber}) =>{
	
	const phoneKeys = [
	{"number" : "2", "letters" : "abc"},
	{"number" : "3", "letters" : "def"},
	{"number" : "4", "letters" : "ghi"},
	{"number" : "5", "letters" : "jkl"},
	{"number" : "6", "letters" : "mno"},
	{"number" : "7", "letters" : "pqrs"},
	{"number" : "8", "letters" : "tuv"},
	{"number" : "9", "letters" : "wxyz"},
] 

	return (
	<div>
	<List ></List>
	<Button onClick={onBack} >BACK</Button>
		{phoneKeys.map(key =>  <PhoneButton key={key.number} number={key.number} letters={key.letters} onClick={() => onNumber(key.number)} />)}
    </div>
)

}


 