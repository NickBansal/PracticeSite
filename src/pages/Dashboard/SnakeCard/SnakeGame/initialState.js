import createEmptyGame from '../../../../utils/functions/createEmptyGame';
import CONSTANTS from '../../../../constants';
import { generateRandomFood } from './snake';

const { SNAKE_ROWS_LENGTH } = CONSTANTS();

const emptyBoard = createEmptyGame(SNAKE_ROWS_LENGTH, SNAKE_ROWS_LENGTH);

export default {
	grid: emptyBoard,
	snake: [[7, 7]],
	food: generateRandomFood(emptyBoard),
	direction: 'pause',
	gameStart: false,
	score: 0,
	gameOver: false,
	speed: 60
};
