import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
	box-sizing: border-box;
	font-size: 20px;
	padding: 10px;
	text-align: ${({ gameOver }) => (gameOver ? 'center' : 'left')};
	color: ${props => (props.gameOver ? 'red' : 'black')};
	border-bottom: 2px solid black;
`;

const Display = ({ gameOver, text }) => (
	<StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
