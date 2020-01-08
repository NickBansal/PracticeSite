import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../utils/globalStyles/constants';

import SnakeGame from '../../../SnakeCard/SnakeGame';

const Container = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 68.8%;
	border-left: 0;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const Game = ({ game }) => (
	<Container>{game === 'Snake' && <SnakeGame />}</Container>
);

export default Game;
