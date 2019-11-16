export const createEmptyGameBoard = (rows, cols, array = []) =>
	rows < 1
		? array
		: createEmptyGameBoard(
				rows - 1,
				cols,
				array.concat([Array(cols).fill(0)])
		  );

export const updateGameBoard = () => {};
