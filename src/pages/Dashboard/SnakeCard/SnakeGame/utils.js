export const createEmptyGameBoard = rows => {
	const outerArray = Array(rows).fill(null);
	outerArray.forEach((_, index) => {
		outerArray[index] = Array(rows).fill(0);
	});
	return outerArray;
};

export const generateRandomFood = (grid, rows) => {
	const i = Math.floor(Math.random() * rows);
	const j = Math.floor(Math.random() * rows);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid, rows);
};
