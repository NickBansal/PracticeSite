export const createEmptyGameBoard = (rows, cols, array = []) =>
	rows < 1
		? array
		: createEmptyGameBoard(
				rows - 1,
				cols,
				array.concat([Array(cols).fill(0)])
		  );

export const generateFood = (num, array) => {
	const i = Math.floor(Math.random() * num);
	const j = Math.floor(Math.random() * num);
	return array.some(item => item[0] === i && item[1] === j)
		? generateFood(num, array)
		: [i, j];
};

export const moveLeft = array => [array[0] - 1, array[1]];
export const moveRight = array => [array[0] + 1, array[1]];
export const moveUp = array => [array[0], array[1] - 1];
export const moveDown = array => [array[0], array[1] + 1];
