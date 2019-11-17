import React, { useState } from 'react';
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

const emptyBoard = createEmptyGameBoard(rowsLength);

const SnakeGame = () => {
	const [grid, setGrid] = useState(emptyBoard);
	const [snake, setSnake] = useState([[7, 7]]);
	const [food, setFood] = useState(generateRandomFood(grid, rowsLength));
	const [direction, setDirection] = useState(null);

	const updateBoard = () => {
		const newGrid = createEmptyGameBoard(rowsLength);
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;

		setGrid(newGrid);
	};

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
				setDirection('pause');
		}
	};

	const moveSnake = () => {
		const newSnake = snake.slice();
		const [x, y] = newSnake[0];
		let movement;
		switch (direction) {
			case 'up':
				movement = y < 1 ? [x, y + rowsLength - 1] : [x, y - 1];
				newSnake.shift();
				newSnake.push(movement);
				break;
			case 'down':
				movement =
					y === rowsLength - 1 ? [x, y - rowsLength + 1] : [x, y + 1];
				newSnake.shift();
				newSnake.push(movement);
				break;
			case 'left':
				movement = x < 1 ? [x + rowsLength - 1, y] : [x - 1, y];
				newSnake.shift();
				newSnake.push(movement);
				break;
			case 'right':
				movement =
					x === rowsLength - 1 ? [x - rowsLength + 1, y] : [x + 1, y];
				newSnake.shift();
				newSnake.push(movement);
				break;
			default:
		}

		setSnake(newSnake);
		updateBoard();
	};

	document.addEventListener('keydown', changeDirectionWithKeys, false);

	useInterval(moveSnake, direction !== 'pause' ? 200 : null);

	return (
		<Container>
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
