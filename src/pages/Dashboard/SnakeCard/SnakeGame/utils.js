import createEmptyGame from '../../../../utils/functions/createEmptyGame';
import CONSTANTS from '../../../../constants';

const { SNAKE_ROWS_LENGTH } = CONSTANTS;

const emptyBoard = createEmptyGame(SNAKE_ROWS_LENGTH, SNAKE_ROWS_LENGTH);

export const generateRandomFood = grid => {
	const i = Math.floor(Math.random() * SNAKE_ROWS_LENGTH);
	const j = Math.floor(Math.random() * SNAKE_ROWS_LENGTH);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid);
};

export const initialState = {
	grid: emptyBoard,
	snake: [[7, 7]],
	food: [9, 7],
	direction: 'pause',
	gameStart: false,
	score: 0,
	gameOver: false,
	speed: 60
};

export const createUpdatedGrid = (snake, food) => {
	const newGrid = createEmptyGame(SNAKE_ROWS_LENGTH, SNAKE_ROWS_LENGTH);
	snake.forEach(([x, y]) => {
		newGrid[x][y] = 1;
	});
	newGrid[food[0]][food[1]] = 2;
	return newGrid;
};

export const isFoodCaught = (snake, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	return grid[x][y] === 2;
};

export const hasSnakeHitItself = (snake, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	if (grid[x][y] === 1 && snake.length > 1) {
		return true;
	}
	return false;
};

export const moveSnake = (snake, direction, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	let movement;
	switch (direction) {
		case 'up':
			movement = y < 1 ? [x, y + SNAKE_ROWS_LENGTH - 1] : [x, y - 1];
			break;
		case 'down':
			movement =
				y === SNAKE_ROWS_LENGTH - 1
					? [x, y - SNAKE_ROWS_LENGTH + 1]
					: [x, y + 1];
			break;
		case 'left':
			movement = x < 1 ? [x + SNAKE_ROWS_LENGTH - 1, y] : [x - 1, y];
			break;
		case 'right':
			movement =
				x === SNAKE_ROWS_LENGTH - 1
					? [x - SNAKE_ROWS_LENGTH + 1, y]
					: [x + 1, y];
			break;
		default:
	}
	newSnake.unshift(movement);

	if (!isFoodCaught(newSnake, grid)) {
		newSnake.pop();
	}

	return newSnake;
};

export const speedLevel = {
	12: 12.5,
	11: 25,
	10: 37.5,
	9: 50,
	8: 62.5,
	7: 75,
	6: 87.5,
	5: 100,
	4: 112.5,
	3: 120.5,
	2: 137.5,
	1: 150
};
