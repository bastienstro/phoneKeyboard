import React from 'react';
import styled, { css }  from 'styled-components'

export const Button = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border:2px solid blue;
  padding: 2rem;
  margin: 0.5rem 1rem;
  background: white;
  cursor:pointer;
  color: blue;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${props => props.primary && css`
    background: blue;
    color: white;
  `}
`

export const PhoneButton = ({number,letters}) => (
	<Button>
		<Number>{number}</Number>
		<Letters>{letters}</Letters>
	</Button>
)

export const BackButton = ({onBack}) => (
	<Button primary onClick={onBack} >BACK</Button>
)


export const Number = styled.div`
	color:blue;
	font-size:20px;
	text-transform:capitalize;
`

export const Letters = styled.div`
	color:black;
	text-transform:capitalize;
`
