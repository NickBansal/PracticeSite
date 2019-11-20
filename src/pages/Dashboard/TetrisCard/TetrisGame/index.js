import React from 'react';
import styled from 'styled-components';
import Information from './Information';
import { createEmptyGameBoard } from '../../SnakeCard/SnakeGame/utils';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';

const Game = styled.div`
	width: fit-content;

	height: 570px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 570px;
	}
`;

const Column = styled.div`
	display: flex;
	flex-direction: row;
`;

const Cells = styled.div`
	width: 38px;
	height: 38px;
	background: black;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: ${breakPoints.mobileMax}) {
		flex-direction: row;
		align-items: baseline;
	}
`;

const grid = createEmptyGameBoard(15, 9);

const TetrisGame = () => (
	<Container>
		<Game>
			{grid.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Cells
							key={String(j)}
							onClick={() => console.log(i, j)}
						/>
					))}
				</Column>
			))}
		</Game>
		<Information />
	</Container>
);

export default TetrisGame;
