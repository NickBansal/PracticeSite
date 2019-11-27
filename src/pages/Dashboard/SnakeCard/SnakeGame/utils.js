export const createEmptyGameBoard = (rows, cols) =>
	Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(0));

export const generateRandomFood = (grid, rows) => {
	const i = Math.floor(Math.random() * rows);
	const j = Math.floor(Math.random() * rows);

	return grid[i][j] === 0 ? [i, j] : generateRandomFood(grid, rows);
};
