import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../../../../utils/globalStyles/constants';

import Cell from './Cell';
import GameOver from '../../../SnakeGame/GameOver';

const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(${props => props.height}, 28px);
	grid-template-columns: repeat(${props => props.width}, 28px);
	grid-gap: 1px;
	border: 5px solid ${colors.pink};
	width: 100%;
	background: #111;
`;

const Stage = ({ stage, gameOver, score, restartGame }) => (
	<StyledStage width={stage[0].length} height={stage.length}>
		{stage.map(row =>
			row.map((cell, x) => <Cell key={String(x)} type={cell[0]} />)
		)}
		{gameOver && <GameOver score={score} restartGame={restartGame} />}
	</StyledStage>
);

export default Stage;
