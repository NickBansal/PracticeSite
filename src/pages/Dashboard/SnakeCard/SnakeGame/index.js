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

const moveSnake = (snake, direction) => {
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
	newSnake.pop();
	return newSnake;
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

const reducer = (state, action) => {
	const { payload, type } = action;

	// if (type === 'grid') {
	// 	return { ...state, grid: payload };
	// }
	if (type === 'heartbeat') {
		const newSnake = moveSnake(state.snake, state.direction);
		const newGrid = createUpdatedGrid(newSnake, state.food);
		const newFood = isFoodCaught(newSnake, newGrid)
			? generateRandomFood(newGrid)
			: state.food;
		return { ...state, snake: newSnake, grid: newGrid, food: newFood };
	}
	// if (type === 'snake') {
	// 	return { ...state, snake: payload };
	// }
	// if (type === 'food') {
	// 	return { ...state, food: payload };
	// }
	if (type === 'direction') {
		const newSnake = moveSnake(state.snake, payload);
		const newGrid = createUpdatedGrid(newSnake, state.food);
		const newFood = isFoodCaught(newSnake, newGrid)
			? generateRandomFood(newGrid)
			: state.food;
		return {
			...state,
			direction: payload,
			snake: newSnake,
			grid: newGrid,
			food: newFood
		};
	}
	// if (type === 'score') {
	// 	return { ...state, score: payload };
	// }
	// if (type === 'gameOver') {
	// 	return { ...state, gameOver: payload };
	// }
	return state;
};

const SnakeGame = () => {
	const [state, dispatch] = useReducer(reducer, {
		grid: emptyBoard,
		snake: [[7, 7]],
		food: generateRandomFood(emptyBoard),
		direction: 'pause',
		score: 0,
		gameOver: false
	});

	const { grid, snake, food, direction, score, gameOver } = state;

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

	const restartGame = () => {
		dispatch({ type: 'gameOver', payload: false });
		dispatch({ type: 'score', payload: 0 });
		dispatch({
			type: 'food',
			payload: generateRandomFood(createEmptyGame(rowsLength, rowsLength))
		});
		dispatch({ type: 'snake', payload: [[7, 7]] });
		updateBoard();
	};

	const changeDirectionWithKeys = e => {
		switch (e.key) {
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

	const moveSnake = () => {
		// const isFoodCaught = () => {
		// 	if (grid[movement[0]][movement[1]] === 2) {
		// 		newSnake.unshift(food);
		// 		dispatch({
		// 			type: 'food',
		// 			payload: generateRandomFood(grid, rowsLength)
		// 		});
		// 		dispatch({ type: 'score', payload: score + 1 });
		// 		const sound = new Audio(splash);
		// 		sound.volume = 0.3;
		// 		sound.play();
		// 	}
		// newSnake.unshift(movement);
		// newSnake.pop();
		// };

		// const checkSnakeHitItself = () => {
		// 	if (grid[movement[0]][movement[1]] === 1 && snake.length > 1) {
		// 		dispatch({ type: 'gameOver', payload: true });
		// 		dispatch({ type: 'direction', payload: 'pause' });
		// 		const sound = new Audio(over);
		// 		sound.volume = 0.6;
		// 		setTimeout(() => sound.play(), 400);
		// 	}
		// };

		// const checkMovement = () => {
		// 	checkSnakeHitItself();
		// 	isFoodCaught();
		// };

		if (!gameOver) {
			// switch (direction) {
			// 	case 'up':
			// 		movement = y < 1 ? [x, y + rowsLength - 1] : [x, y - 1];
			// 		// checkMovement();
			// 		break;
			// 	case 'down':
			// 		movement =
			// 			y === rowsLength - 1
			// 				? [x, y - rowsLength + 1]
			// 				: [x, y + 1];
			// 		// checkMovement();
			// 		break;
			// 	case 'left':
			// 		movement = x < 1 ? [x + rowsLength - 1, y] : [x - 1, y];
			// 		// checkMovement();
			// 		break;
			// 	case 'right':
			// 		movement =
			// 			x === rowsLength - 1
			// 				? [x - rowsLength + 1, y]
			// 				: [x + 1, y];
			// 		// checkMovement();
			// 		break;
			// 	default:
			// }
			// newSnake.unshift(movement);
			// newSnake.pop();
		}

		// dispatch({ type: 'snake', payload: newSnake });

		updateBoard();
	};

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
			{gameOver && <GameOver restartGame={restartGame} score={score} />}
			{direction === 'pause' && !gameOver && (
				<Pause>Paused - Press the arrow keys to continue</Pause>
			)}
		</>
	);
};

export default SnakeGame;
