import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';

import { generateGameWithSnakeAndFood } from './utils';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ food, snake }) => {
		if (snake) {
			return 'green';
		}
		if (food) {
			return 'orange';
		}
		return 'black';
	}};

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
	const [gameBoard, setBoard] = useState(generateGameWithSnakeAndFood(15));

	return (
		<Container>
			{gameBoard.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Row
							food={row === 2}
							key={String(j)}
							snake={row === 1}
						/>
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;

// background-image: ${({ food }) =>
// food
// 	? `url(${foods[Math.floor(Math.random() * foods.length)]})`
// 	: 'none'};
