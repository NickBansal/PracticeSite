import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../utils/globalStyles/constants';

import SnakeGame from './SnakeGame';
import TetrisGame from './TetrisGame';
import SpaceInvadersGame from './SpaceInvadersGame';

const Container = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 68.8%;
	border-left: 0;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const gameSelection = {
	Snake: <SnakeGame />,
	Tetris: <TetrisGame />,
	SpaceInvaders: <SpaceInvadersGame />
};

const Games = ({ game }) => <Container>{gameSelection[game]}</Container>;

export default Games;
