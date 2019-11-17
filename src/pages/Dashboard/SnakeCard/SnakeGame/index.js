import React, { useState } from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize
} from '../../../../utils/globalStyles/constants';
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

const Score = styled.p`
	color: white;
	letter-spacing: 2px;
	background: ${colors.pink};
	font-size: ${fontSize.title};
	text-align: center;
	margin: 0 auto;
	border-bottom: 5px solid ${colors.pink};
	border-left: 5px solid ${colors.pink};
	border-right: 5px solid ${colors.pink};
	width: 375px;

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 600px;
	}
`;

const rowsLength = 15;

const emptyBoard = createEmptyGameBoard(rowsLength);

const SnakeGame = () => {
	const [grid, setGrid] = useState(emptyBoard);
	const [snake, setSnake] = useState([[7, 7]]);
	const [food, setFood] = useState(generateRandomFood(grid, rowsLength));
	const [direction, setDirection] = useState(null);
	const [score, setScore] = useState(0);

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

		const isFoodCaught = () => {
			if (grid[movement[0]][movement[1]] === 2) {
				newSnake.unshift(food);
				setFood(generateRandomFood(grid, rowsLength));
				setScore(score + 1);
			}
			newSnake.unshift(movement);
			newSnake.pop();
		};

		switch (direction) {
			case 'up':
				movement = y < 1 ? [x, y + rowsLength - 1] : [x, y - 1];
				isFoodCaught();
				break;
			case 'down':
				movement =
					y === rowsLength - 1 ? [x, y - rowsLength + 1] : [x, y + 1];
				isFoodCaught();
				break;
			case 'left':
				movement = x < 1 ? [x + rowsLength - 1, y] : [x - 1, y];
				isFoodCaught();
				break;
			case 'right':
				movement =
					x === rowsLength - 1 ? [x - rowsLength + 1, y] : [x + 1, y];
				isFoodCaught();
				break;
			default:
		}
		setSnake(newSnake);
		updateBoard();
	};

	document.addEventListener('keydown', changeDirectionWithKeys, false);

	useInterval(moveSnake, direction !== 'pause' ? 100 : null);

	return (
		<>
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
			<Score>Score: {score}</Score>
		</>
	);
};

export default SnakeGame;
