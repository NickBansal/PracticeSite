export const createEmptyGameBoard = rows => {
	const arr = [];
	for (let i = 0; i < rows; i++) {
		arr[i] = Array(rows).fill(0);
	}
	return arr;
};

export const generateRandomFood = (grid, rows) => {
	const i = Math.floor(Math.random() * rows);
	const j = Math.floor(Math.random() * rows);
	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid, rows);
};
