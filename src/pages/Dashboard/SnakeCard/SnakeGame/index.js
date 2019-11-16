import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import useInterval from '../../../../utils/hooks/useInterval';
import { gameBoard } from './utils';
// import pint from '../../../../assets/snake/pint.svg';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? colors.green : 'black')};

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

const rowsLength = 15;
const grid = gameBoard(rowsLength);

const SnakeGame = () => {
	const [position, setPosition] = useState([7, 7]);
	const [direction, setDirection] = useState(null);

	useEffect(() => {
		const [body] = document.getElementsByTagName('body');
		body.onkeydown = ({ key }) => {
			switch (key) {
				case 'ArrowUp':
					return setDirection('up');
				case 'ArrowDown':
					return setDirection('down');
				case 'ArrowLeft':
					return setDirection('left');
				default:
					setDirection('right');
			}
		};
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			switch (direction) {
				case 'up':
					return setPosition(([x, y]) =>
						y < 1 ? [x, y + rowsLength] : [x, y - 1]
					);
				case 'down':
					return setPosition(([x, y]) =>
						y > rowsLength ? [x, y - rowsLength - 1] : [x, y + 1]
					);
				case 'left':
					return setPosition(([x, y]) =>
						x < 1 ? [x + rowsLength, y] : [x - 1, y]
					);
				case 'right':
					return setPosition(([x, y]) =>
						x > rowsLength ? [x - rowsLength - 1, y] : [x + 1, y]
					);
				default:
			}
		}, 200);
		return () => clearInterval(interval);
	}, [direction]);

	const [x, y] = position;

	return (
		<Container id="snakeGame">
			{grid.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Row key={String(j)} snake={x === i && y === j} />
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;
