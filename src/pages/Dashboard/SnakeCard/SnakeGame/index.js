import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import useInterval from '../../../../utils/hooks/useInterval';
import pint from '../../../../assets/snake/pint.svg';

import { generateGameWithSnakeAndFood } from './utils';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? 'green' : 'black')};
	background-image: ${({ food }) => (food ? `url(${pint})` : 'none')};

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
	const [keyPress, setKeyPress] = useState(false);

	useInterval(() => {}, 500);

	const handleKeyPress = e => {
		switch (e.key) {
			case 'ArrowUp':
				setKeyPress('up');
				break;
			case 'ArrowDown':
				setKeyPress('down');
				break;
			case 'ArrowRight':
				setKeyPress('right');
				break;
			default:
				setKeyPress('left');
		}
	};

	// console.log(keyPress);

	return (
		<Container tabIndex={0} onKeyDown={handleKeyPress}>
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
