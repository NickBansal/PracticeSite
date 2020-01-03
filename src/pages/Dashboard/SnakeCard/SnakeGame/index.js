import React, { useEffect, useReducer } from 'react';
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

const Pause = styled.div`
	color: white;
	top: 75%;
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

const Begin = styled(Pause)`
	top: 30%;
`;

const rowsLength = 15;
const emptyBoard = createEmptyGame(rowsLength, rowsLength);

const createUpdatedGrid = (snake, food) => {
	const newGrid = createEmptyGame(rowsLength, rowsLength);
	snake.forEach(([x, y]) => {
		newGrid[x][y] = 1;
	});
	newGrid[food[0]][food[1]] = 2;
	return newGrid;
};

const generateRandomFood = grid => {
	const i = Math.floor(Math.random() * rowsLength);
	const j = Math.floor(Math.random() * rowsLength);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid);
};

const isFoodCaught = (snake, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	if (grid[x][y] === 2) {
		const sound = new Audio(splash);
		sound.volume = 0.3;
		sound.play();
		return true;
	}
	return false;
};

// const hasSnakeHitItself = (snake, grid) => {
// 	const newSnake = snake.slice();
// 	const [x, y] = newSnake[0];
// 	if (grid[x][y] === 1 && snake.length > 1) {
// 		const sound = new Audio(over);
// 		sound.volume = 0.6;
// 		setTimeout(() => sound.play(), 400);
// 		return true;
// 	}
// 	return false;
// };

const moveSnake = (snake, direction, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	let movement;
	switch (direction) {
		case 'up':
			movement = y < 1 ? [x, y + rowsLength - 1] : [x, y - 1];
			break;
		case 'down':
			movement =
				y === rowsLength - 1 ? [x, y - rowsLength + 1] : [x, y + 1];
			break;
		case 'left':
			movement = x < 1 ? [x + rowsLength - 1, y] : [x - 1, y];
			break;
		case 'right':
			movement =
				x === rowsLength - 1 ? [x - rowsLength + 1, y] : [x + 1, y];
			break;
		default:
	}
	newSnake.unshift(movement);

	if (!isFoodCaught(newSnake, grid)) {
		newSnake.pop();
	}

	return newSnake;
};

const reducer = (state, action) => {
	const { payload, type } = action;

	if (type === 'heartbeat') {
		if (state.direction === 'pause') {
			return { ...state };
		}
		const newSnake = moveSnake(state.snake, state.direction, state.grid);
		const newGrid = createUpdatedGrid(newSnake, state.food);
		const newFood = isFoodCaught(newSnake, newGrid)
			? generateRandomFood(newGrid)
			: state.food;

		return {
			...state,
			snake: newSnake,
			grid: newGrid,
			food: newFood,
			gameStart: true
		};
	}

	if (type === 'direction') {
		return {
			...state,
			direction: payload
		};
	}
	return state;
};

const SnakeGame = () => {
	const [state, dispatch] = useReducer(reducer, {
		grid: emptyBoard,
		snake: [[7, 7]],
		food: generateRandomFood(emptyBoard),
		direction: 'pause',
		gameStart: false,
		score: 0,
		gameOver: false
	});

	const { grid, snake, food, direction, score, gameOver, gameStart } = state;

	const updateBoard = () => {
		const newGrid = createEmptyGame(rowsLength, rowsLength);
		snake.forEach(([x, y]) => {
			newGrid[x][y] = 1;
		});
		newGrid[food[0]][food[1]] = 2;
		dispatch({ type: 'grid', payload: newGrid });
	};

	useEffect(() => {
		updateBoard();
		// eslint-disable-next-line
	}, [gameOver]);

	const changeDirectionWithKeys = ({ key }) => {
		switch (key) {
			case 'ArrowUp':
				dispatch({ type: 'direction', payload: 'up' });
				break;
			case 'ArrowDown':
				dispatch({ type: 'direction', payload: 'down' });
				break;
			case 'ArrowRight':
				dispatch({ type: 'direction', payload: 'right' });
				break;
			case 'ArrowLeft':
				dispatch({ type: 'direction', payload: 'left' });
				break;
			default:
				dispatch({ type: 'direction', payload: 'pause' });
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', changeDirectionWithKeys, false);
	}, []);

	useInterval(
		() => {
			dispatch({ type: 'heartbeat' });
		},
		direction !== 'pause' ? 80 : null
	);
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
			{!gameStart && (
				<Begin>
					<h2>Welcome</h2>
					Please press any arrow key to begin the game
				</Begin>
			)}
			{direction === 'pause' && gameStart && (
				<Pause>
					<h3 style={{ margin: 0 }}>Game paused</h3>Please press any
					arrow key to continue
				</Pause>
			)}
		</>
	);
};

export default SnakeGame;
