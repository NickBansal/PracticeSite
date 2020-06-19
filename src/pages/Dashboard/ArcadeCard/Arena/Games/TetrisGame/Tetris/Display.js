import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px;
	border: 4px solid #333;
	width: 100%;
	border-radius: 20px;
	color: ${props => (props.gameOver ? 'red' : '#999')};
	background: black;
`;

const Display = ({ gameOver, text }) => (
	<StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
