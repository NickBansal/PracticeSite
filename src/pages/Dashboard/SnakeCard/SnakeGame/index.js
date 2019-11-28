import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize
} from '../../../../utils/globalStyles/constants';
import createEmptyGame from '../../../../utils/functions/createEmptyGame';
import useInterval from '../../../../utils/hooks/useInterval';
import Cells from './Cells';
import GameOver from './GameOver';
import Score from './Score';
import splash from '../../../../assets/snake/splash.mp3';
import over from '../../../../assets/snake/gameOver.mp3';

const Column = styled.div`
	display: inline-block;
`;

const Container = styled.div`
	width: fit-content;
	min-width: 375px;
	margin: 0 auto;
	height: 375px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 600px;
	}
`;

const Pause = styled.p`
	color: white;
	top: 80%;
	position: absolute;
	left: 50%;
	transform: translate(-50%, 0);
	font-size: ${fontSize.small};
	width: 600px;
	text-align: center;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: ${fontSize.title};
	}
`;

const rowsLength = 15;
const emptyBoard = createEmptyGame(rowsLength, rowsLength);

const generateRandomFood = (grid, rows) => {
	const i = Math.floor(Math.random() * rows);
	const j = Math.floor(Math.random() * rows);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid, rows);
};

const SnakeGame = () => {
	const [grid, setGrid] = useState(emptyBoard);
	const [snake, setSnake] = useState([[7, 7]]);
	const [food, setFood] = useState(generateRandomFood(grid, rowsLength));
	const [direction, setDirection] = useState(null);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	const updateBoard = () => {
		const newGrid = createEmptyGame(rowsLength, rowsLength);
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;
		setGrid(newGrid);
	};

	useEffect(() => {
		updateBoard();
		// eslint-disable-next-line
	}, [gameOver]);

	const restartGame = () => {
		setGameOver(false);
		setScore(0);
		setFood(
			generateRandomFood(
				createEmptyGame(rowsLength, rowsLength),
				rowsLength
			)
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
				const sound = new Audio(splash);
				sound.volume = 0.3;
				sound.play();
			}
			newSnake.unshift(movement);
			newSnake.pop();
		};

		const checkSnakeHitItself = () => {
			if (grid[movement[0]][movement[1]] === 1 && snake.length > 1) {
				setGameOver(true);
				setDirection('pause');
				const sound = new Audio(over);
				sound.volume = 0.6;
				setTimeout(() => sound.play(), 400);
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

	useInterval(moveSnake, direction !== 'pause' ? 80 : null);

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
			<Score score={score} />
			{gameOver && <GameOver restartGame={restartGame} score={score} />}
			{direction === 'pause' && !gameOver && (
				<Pause>Paused - Press the arrow keys to continue</Pause>
			)}
		</>
	);
};

export default SnakeGame;
