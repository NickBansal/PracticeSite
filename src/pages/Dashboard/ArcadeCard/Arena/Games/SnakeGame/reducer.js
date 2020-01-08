import {
	generateRandomFood,
	initialState,
	isFoodCaught,
	createUpdatedGrid,
	hasSnakeHitItself,
	moveSnake
} from './snake';
import createEmptyGame from '../../../../../../utils/functions/createEmptyGame';
import splash from '../../../../../../assets/snake/splash.mp3';
import over from '../../../../../../assets/snake/gameOver.mp3';
import CONSTANTS from '../../../../../../constants';

const { SNAKE_ROWS_LENGTH } = CONSTANTS;

export default (state, action) => {
	const { payload, type } = action;

	if (type === 'heartbeat') {
		if (state.direction === 'pause') {
			return state;
		}

		let newState = {};
		let isGameOver = false;
		const newSnake = moveSnake(state.snake, state.direction, state.grid);
		const newGrid = createUpdatedGrid(newSnake, state.food);

		if (isFoodCaught(newSnake, newGrid)) {
			const sound = new Audio(splash);
			sound.volume = 0.3;
			sound.play();
			newState = {
				food: generateRandomFood(newGrid),
				score: state.score + 1,
				speed:
					(state.score + 1) % 5 === 0 && state.score > 0
						? state.speed - 5
						: state.speed
			};
		}

		if (hasSnakeHitItself(newSnake, state.grid)) {
			const sound = new Audio(over);
			sound.volume = 0.6;
			setTimeout(() => sound.play(), 400);
			isGameOver = true;
		}

		return {
			...state,
			...newState,
			snake: newSnake,
			grid: newGrid,
			gameStart: true,
			gameOver: isGameOver
		};
	}

	if (type === 'restart') {
		return {
			...initialState,
			food: generateRandomFood(
				createEmptyGame(SNAKE_ROWS_LENGTH, SNAKE_ROWS_LENGTH)
			)
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
