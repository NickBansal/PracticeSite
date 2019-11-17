import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import { createEmptyGameBoard, generateRandomFood } from './utils';
import useInterval from '../../../../utils/hooks/useInterval';
import pint from '../../../../assets/snake/pint.svg';

const Column = styled.div`
	display: inline-block;
`;

const Cells = styled.div`
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

const rowsLength = 15;

const SnakeGame = () => {
	const [grid, setGrid] = useState(createEmptyGameBoard(rowsLength));
	const [snake, setSnake] = useState([[7, 7], [8, 7]]);
	const [food, setFood] = useState(generateRandomFood(grid, rowsLength));
	const [direction, setDirection] = useState(null);

	const updateBoard = () => {
		const newGrid = grid.slice();
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;
		setGrid(newGrid);
	};

	useEffect(() => {
		updateBoard();
	}, []);

	const changeDirectionWithKeys = e => {
		switch (e.key) {
			case 'ArrowUp':
				setDirection('up');
				break;
			case 'ArrowDown':
				setDirection('down');
				break;
			case 'ArrowRight':
				setDirection('right');
				break;
			case 'ArrowLeft':
				setDirection('left');
				break;
			default:
		}
	};

	document.addEventListener('keydown', changeDirectionWithKeys, false);

	// useInterval(moveSnake, 500);

	console.log(direction);

	return (
		<Container id="snakeGame">
			{grid.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Cells
							key={String(j)}
							snake={row === 1}
							food={row === 2}
						/>
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;
