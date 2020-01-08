import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../utils/globalStyles/constants';

import SnakeGame from './SnakeGame';

const Container = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 68.8%;
	border-left: 0;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const Games = ({ game }) => (
	<Container>
		{game === 'Snake' && <SnakeGame />}
		{game === 'Tetris' && <div>TETRIS</div>}
		{game === 'Space Invaders' && <div> SPACE INVADERS</div>}
	</Container>
);

export default Games;
