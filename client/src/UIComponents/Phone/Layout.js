import React from 'react';
import styled, { css }  from 'styled-components'

export const Phone = styled.div`
  margin:0 auto;
  width:300px;
  height:600px;
  border-radius:50px;
  padding:20px 40px;
  border:5px solid black;
  background:black;
  box-shadow: 0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4);
  display:flex;
  flex-flow:column nowrap;flex-grow: 1;
`

export const Screen = styled.div`
  height:40%;
  width:100%;
  background:black;
  display:flex;
  align-items: center;
  justify-content: center;
  
  div{
	 color:white;
	 font-size:60px;
  }

`
export const Display = ({value}) => (
	<Screen>
		<div>{value}</div>
	</Screen>
)

export const List = styled.div`
height:10%;
width:100%;
background:black;
color:white;  
`

export const PhoneBottom = styled.div`
height:50%;flex-grow: 1;
width:100%;
display : flex;
  flex-wrap: wrap;

`
