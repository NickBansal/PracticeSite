import {
	generateRandomFood,
	initialState,
	isFoodCaught,
	createUpdatedGrid,
	hasSnakeHitItself,
	moveSnake
} from './utils';

export default (state, action) => {
	const { payload, type } = action;

	if (type === 'heartbeat') {
		if (state.direction === 'pause') {
			return { ...state };
		}
		const newSnake = moveSnake(state.snake, state.direction, state.grid);
		const newGrid = createUpdatedGrid(newSnake, state.food);

		const newState = isFoodCaught(newSnake, newGrid)
			? {
					food: generateRandomFood(newGrid),
					score: state.score + 1
			  }
			: {
					...state
			  };

		const isGameOver = hasSnakeHitItself(newSnake, state.grid);

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
		return initialState;
	}

	if (type === 'direction') {
		return {
			...state,
			direction: payload
		};
	}
	return state;
};
