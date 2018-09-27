import React from 'react';
import styled from 'styled-components'

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

export const List = styled.ul`
  height:10%;
  width:100%;
  background:black;
  list-style-type : none;
  color:white;  
  text-align:center;
  margin:0;
  padding:0;
`

export const Suggestion = styled.li`
  color:white; 
  display:inline-block;
  padding:10px; 
`
export const Display = ({value}) => (
	<Screen>
		<div>{value}</div>
		
	</Screen>
)

export const PhoneBottom = styled.div`
height:50%;flex-grow: 1;
width:100%;
display : flex;
  flex-wrap: wrap;

`
