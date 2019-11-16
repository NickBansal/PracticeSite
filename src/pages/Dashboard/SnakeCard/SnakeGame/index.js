import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import { gameBoard, generateFood } from './utils';
import useInterval from '../../../../utils/hooks/useInterval';
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
	const [gameBoard, setGameBoard] = useState(grid);
	const [snake, setSnake] = useState([[7, 7]]);
	const [direction, setDirection] = useState(null);
	// const [food, setFood] = useState(generateFood(rowsLength));

	const changeDirectionWithKeys = e => {
		const { key } = e;
		switch (key) {
			case 'ArrowLeft':
				setDirection('left');
				break;
			case 'ArrowRight':
				setDirection('right');
				break;
			case 'ArrowUp':
				setDirection('up');
				break;
			case 'ArrowDown':
				setDirection('down');
				break;
			default:
				break;
		}
	};

	document.addEventListener('keydown', changeDirectionWithKeys, false);

	const displaySnake = () => {
		const newBoard = gameBoard;
		snake.forEach(([xCoord, yCoord]) => {
			newBoard[xCoord][yCoord] = 1;
		});
		// newBoard[food[0]][food[1]] = 2;
		setGameBoard(newBoard);
	};

	const moveSnake = () => {
		const newSnake = [];
		const [x, y] = snake[0];
		switch (direction) {
			case 'right':
				if (x > rowsLength) {
					newSnake.push([x - rowsLength - 1, y]);
				} else {
					newSnake.push([x + 1, y]);
				}
				break;
			case 'left':
				if (x < 0) {
					newSnake.push([x + rowsLength - 1, y]);
				} else {
					newSnake.push([x - 1, y]);
				}
				break;
			case 'up':
				if (y < 0) {
					newSnake.push([x, y + rowsLength]);
				} else {
					newSnake.push([x, y - 1]);
				}
				break;
			case 'down':
				if (y > rowsLength) {
					newSnake.push([x, y - rowsLength]);
				} else {
					newSnake.push([x, y + 1]);
				}
				break;
			default:
		}
		snake.forEach(cell => {
			newSnake.push(cell);
		});
		// if (snake[0].x === food.x && snake[0].y === food.y) {
		// 	setFood(randomPosition);
		// } else {
		// 	newSnake.pop();
		// }
		setSnake(newSnake);
		displaySnake();
	};

	useInterval(moveSnake, 100);

	const [x, y] = snake[0];

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
