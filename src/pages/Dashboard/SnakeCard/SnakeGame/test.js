import { generateRandomFood } from './utils';

jest.mock('../../../../constants', () => ({ SNAKE_ROWS_LENGTH: 3 }));

describe('Util functions testing', () => {
	it('generateRandomFood', () => {
		const grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
		expect(generateRandomFood(grid)).toEqual([1, 1]);
	});
	it('generateRandomFood', () => {
		const grid = [[1, 1, 1], [1, 1, 1], [1, 1, 0]];
		expect(generateRandomFood(grid)).toEqual([2, 2]);
	});
});
