export const createEmptyGameBoard = (rows, array = []) =>
	rows < 1
		? array
		: createEmptyGameBoard(rows - 1, array.concat([Array(9).fill(0)]));

export const updateGameBoard = () => {};
