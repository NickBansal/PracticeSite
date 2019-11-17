import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize,
	spacing,
	transitionSpeed
} from '../../../../utils/globalStyles/constants';
import { HR } from '../../../../utils/globalStyles';
import { createEmptyGameBoard, generateRandomFood } from './utils';
import useInterval from '../../../../utils/hooks/useInterval';
import pint from '../../../../assets/snake/pint.svg';

const Column = styled.div`
	display: inline-block;
`;

const Cells = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? colors.green : 'black')};
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
	letter-spacing: 1px;
	background: ${colors.pink};
	font-size: ${fontSize.regular};
	text-align: center;
	margin: 0 auto;
	border-bottom: 5px solid ${colors.pink};
	border-left: 5px solid ${colors.pink};
	border-right: 5px solid ${colors.pink};
	width: 375px;

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 600px;
		font-size: ${fontSize.title};
		letter-spacing: 1.5px;
	}
`;

const Over = styled.div`
	padding: ${spacing.s1};
	color: white;
	position: absolute;
	transform: translate(-50%, 0);
	left: 50%;
	top: 20%;
	width: 300px;
	height: 150px;
	background: black;
	color: white;
	text-align: center;
	border: 5px solid ${colors.pink};
	border-radius: 10px;
	font-size: 1.5rem;
`;

const Restart = styled.button`
	display: block;
	margin: ${spacing.s2} auto ${spacing.s1};
	height: 35px;
	width: 110px;
	border: 2px solid ${colors.pink};
	border-radius: 5px;
	font-size: 1rem;
	background: black;
	color: white;

	&:hover {
		cursor: pointer;
		background: ${colors.pink};
		color: black;
	}

	transition: ${transitionSpeed};
`;

const rowsLength = 15;
const emptyBoard = createEmptyGameBoard(rowsLength);

const SnakeGame = () => {
	const [grid, setGrid] = useState(emptyBoard);
	const [snake, setSnake] = useState([[7, 7]]);
	const [food, setFood] = useState(generateRandomFood(grid, rowsLength));
	const [direction, setDirection] = useState(null);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const updateBoard = () => {
		const newGrid = createEmptyGameBoard(rowsLength);
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;
		setGrid(newGrid);
	};

	useEffect(() => {
		updateBoard();
	}, [gameOver]);

	const restartGame = () => {
		setGameOver(false);
		setScore(0);
		setFood(
			generateRandomFood(createEmptyGameBoard(rowsLength), rowsLength)
		);
		setSnake([[7, 7]]);
		updateBoard();
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

		const checkSnakeHitItself = () => {
			if (grid[movement[0]][movement[1]] === 1 && snake.length > 1) {
				setGameOver(true);
				setDirection('pause');
			}
		};

		const checkMovement = () => {
			checkSnakeHitItself();
			isFoodCaught();
		};

		if (!gameOver) {
			switch (direction) {
				case 'up':
					movement = y < 1 ? [x, y + rowsLength - 1] : [x, y - 1];
					checkMovement();
					break;
				case 'down':
					movement =
						y === rowsLength - 1
							? [x, y - rowsLength + 1]
							: [x, y + 1];
					checkMovement();
					break;
				case 'left':
					movement = x < 1 ? [x + rowsLength - 1, y] : [x - 1, y];
					checkMovement();
					break;
				case 'right':
					movement =
						x === rowsLength - 1
							? [x - rowsLength + 1, y]
							: [x + 1, y];
					checkMovement();
					break;
				default:
			}
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
			{gameOver && (
				<Over>
					GAMEOVER
					<HR />
					Final Score: {score}
					<Restart type="button" onClick={restartGame}>
						Start again?
					</Restart>
				</Over>
			)}
		</>
	);
};

export default SnakeGame;
