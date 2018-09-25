import React from 'react';
import styled, { css }  from 'styled-components'

export const Button = styled.button`

  flex-grow: 1;
  width: 33%;
  border:none;
  padding: 2rem;
  background: black;
  cursor:pointer;
  color: white;
  line-height:20px;

  ${props => props.primary && css`
    background: black;
    color: gray;
    font-size:14px;
    
  `}
`

export const PhoneButton = ({number,letters,onClick}) => (
	<Button onClick={onClick}>
		<Number>{number}</Number>
		<Letters>{letters}</Letters>
	</Button>
)

export const Number = styled.div`
	font-size:20px;
	text-transform:capitalize;
`

export const Letters = styled.div`
	color:gray;
	text-transform:uppercase;
`
