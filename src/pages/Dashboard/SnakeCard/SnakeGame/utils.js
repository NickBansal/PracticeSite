import splash from '../../../../assets/snake/splash.mp3';
import over from '../../../../assets/snake/gameOver.mp3';
import createEmptyGame from '../../../../utils/functions/createEmptyGame';

const rowsLength = 15;
const emptyBoard = createEmptyGame(rowsLength, rowsLength);

export const generateRandomFood = grid => {
	const i = Math.floor(Math.random() * rowsLength);
	const j = Math.floor(Math.random() * rowsLength);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid);
};

export const initialState = {
	grid: emptyBoard,
	snake: [[7, 7]],
	food: generateRandomFood(emptyBoard, rowsLength),
	direction: 'pause',
	gameStart: false,
	score: 0,
	gameOver: false,
	speed: 600
};

export const createUpdatedGrid = (snake, food) => {
	const newGrid = createEmptyGame(rowsLength, rowsLength);
	snake.forEach(([x, y]) => {
		newGrid[x][y] = 1;
	});
	newGrid[food[0]][food[1]] = 2;
	return newGrid;
};

export const isFoodCaught = (snake, grid) => {
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

export const hasSnakeHitItself = (snake, grid) => {
	const newSnake = snake.slice();
	const [x, y] = newSnake[0];
	if (grid[x][y] === 1 && snake.length > 1) {
		const sound = new Audio(over);
		sound.volume = 0.6;
		setTimeout(() => sound.play(), 400);
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
