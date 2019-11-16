import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import foods from '../../../../assets/snake';

import { createEmptyGameBoard, generateFood } from './utils';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: black
	background-image: ${({ food }) =>
		food
			? `url(${foods[Math.floor(Math.random() * foods.length)]})`
			: 'none'};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 40px;
		height: 40px;
	}
`;

const Container = styled.div`
	width: fit-content;
	margin: 0 auto;
	height: 375px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 600px;
	}
`;

const SnakeGame = () => {
	const [gameBoard, setBoard] = useState(createEmptyGameBoard(15, 15));
	const [food, setFood] = useState(generateFood(12, gameBoard));

	return (
		<Container>
			{gameBoard.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Row
							food={food[0] === i && food[1] === j}
							key={String(j)}
						/>
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;
