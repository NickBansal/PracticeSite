import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	box-sizing: border-box;
	margin: 0 0 20px 0;
	padding: 10px;
	border-radius: 20px;
	border: none;
	color: white;
	backgroud: #333;
    outline: none;
    width: 100%
    cursor: pointer;
`;

const StartButton = ({ callBack }) => (
	<Button onClick={callBack}>Start game</Button>
);

export default StartButton;
