import {
	generateRandomFood,
	createUpdatedGrid,
	isFoodCaught,
	hasSnakeHitItself,
	moveSnake,
	initialState
} from './utils';
import reducer from './reducer';

jest.mock('../../../../constants', () => ({ SNAKE_ROWS_LENGTH: 3 }));

describe('Util functions testing', () => {
	it('generateRandomFood', () => {
		const grid1 = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
		expect(generateRandomFood(grid1)).toEqual([1, 1]);

		const grid2 = [[1, 1, 1], [1, 1, 1], [1, 1, 0]];
		expect(generateRandomFood(grid2)).toEqual([2, 2]);
	});

	it('createUpdatedGrid', () => {
		const snake1 = [[0, 2]];
		const food1 = [2, 1];
		expect(createUpdatedGrid(snake1, food1)).toEqual([
			[0, 0, 1],
			[0, 0, 0],
			[0, 2, 0]
		]);

		const snake2 = [[0, 0]];
		const food2 = [2, 2];
		expect(createUpdatedGrid(snake2, food2)).toEqual([
			[1, 0, 0],
			[0, 0, 0],
			[0, 0, 2]
		]);

		const snake3 = [[1, 1]];
		const food3 = [2, 0];
		expect(createUpdatedGrid(snake3, food3)).toEqual([
			[0, 0, 0],
			[0, 1, 0],
			[2, 0, 0]
		]);
	});

	it('isFoodCaught', () => {
		const grid1 = [[2, 0, 0], [0, 0, 0], [0, 0, 0]];
		const snake1 = [[0, 0], [0, 1]];
		expect(isFoodCaught(snake1, grid1)).toBe(true);

		const grid2 = [[2, 0, 0], [0, 0, 0], [0, 0, 0]];
		const snake2 = [[1, 1], [2, 1]];
		expect(isFoodCaught(snake2, grid2)).toBe(false);
	});

	it('hasSnakeHitItself', () => {
		const grid1 = [[1, 0, 0], [0, 0, 0], [0, 0, 0]];
		const snake1 = [[0, 0], [0, 1]];
		expect(hasSnakeHitItself(snake1, grid1)).toBe(true);

		const grid2 = [[1, 0, 0], [0, 0, 0], [0, 0, 0]];
		const snake2 = [[1, 1], [2, 1]];
		expect(isFoodCaught(snake2, grid2)).toBe(false);
	});

	it('moveSnake', () => {
		const grid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

		// UP
		const snake1 = [[0, 0], [0, 1]];
		expect(moveSnake(snake1, 'up', grid)).toEqual([[0, 2], [0, 0]]);
		const snake2 = [[1, 2]];
		expect(moveSnake(snake2, 'up', grid)).toEqual([[1, 1]]);

		// DOWN
		const snake3 = [[0, 0], [0, 1]];
		expect(moveSnake(snake3, 'down', grid)).toEqual([[0, 1], [0, 0]]);
		const snake4 = [[1, 2]];
		expect(moveSnake(snake4, 'down', grid)).toEqual([[1, 0]]);

		// RIGHT
		const snake5 = [[2, 0], [1, 0]];
		expect(moveSnake(snake5, 'right', grid)).toEqual([[0, 0], [2, 0]]);
		const snake6 = [[1, 2]];
		expect(moveSnake(snake6, 'right', grid)).toEqual([[2, 2]]);

		// LEFT
		const snake7 = [[0, 0], [0, 1]];
		expect(moveSnake(snake7, 'left', grid)).toEqual([[2, 0], [0, 0]]);
		const snake8 = [[1, 2]];
		expect(moveSnake(snake8, 'left', grid)).toEqual([[0, 2]]);

		// SNAKE CATCHES FOOD
		const gridWithFood = [[2, 0, 0], [0, 0, 0], [0, 0, 0]];
		const snake9 = [[0, 1], [0, 2]];
		expect(moveSnake(snake9, 'up', gridWithFood)).toEqual([
			[0, 0],
			[0, 1],
			[0, 2]
		]);
	});
});

describe('Reducer function', () => {
	it('should return the initial state if game is paused', () => {
		expect(
			reducer(
				{
					...initialState,
					direction: 'pause'
				},
				{
					type: 'heartbeat'
				}
			)
		).toEqual(initialState);
	});

	it('should return the initial state if type is unknown', () => {
		expect(reducer(initialState, { type: 'unknown' })).toBe(initialState);
	});

	// it('should return the increase the speed if food is caught and score is equal to 10', () => {
	// 	expect(
	// 		reducer(
	// 			{
	// 				...initialState,
	// 				snake: [[7, 7], [8, 7]],
	// 				food: [9, 7],
	// 				score: 10,
	// 				speed: 60,
	// 				direction: 'right'
	// 			},
	// 			{
	// 				type: 'heartbeat'
	// 			}
	// 		)
	// 	).toEqual(initialState);
	// });
});
