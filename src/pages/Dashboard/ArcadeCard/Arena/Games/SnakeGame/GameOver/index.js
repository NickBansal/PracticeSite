import React from 'react';
import styled from 'styled-components';
import {
	colors,
	spacing,
	transitionSpeed
} from '../../../../../../../utils/globalStyles/constants';
import { HR } from '../../../../../../../utils/globalStyles';

const Restart = styled.button`
	display: block;
	margin: ${spacing.s2} auto ${spacing.s1};
	height: 35px;
	width: 110px;
	border: 2px solid ${colors.pink};
	border-radius: 5px;
	font-size: 1rem;
	background: black;
	color: white;

	&:hover {
		cursor: pointer;
		background: ${colors.pink};
		color: black;
	}

	transition: ${transitionSpeed};
`;

const Over = styled.div`
	padding: ${spacing.s1};
	color: white;
	position: absolute;
	transform: translate(-50%, 0);
	left: 70%;
	top: 20%;
	width: 300px;
	height: 150px;
	background: black;
	color: white;
	text-align: center;
	border: 5px solid ${colors.pink};
	border-radius: 10px;
	font-size: 1.5rem;
`;

const GameOver = ({ score, restartGame }) => (
	<Over>
		GAMEOVER
		<HR />
		Final Score: {score}
		<Restart type="button" onClick={restartGame}>
			Start again?
		</Restart>
	</Over>
);

export default GameOver;
