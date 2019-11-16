const row = 15;

export const gameBoard = [
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0),
	Array(row).fill(0)
];

export const generateGameWithSnakeAndFood = val => {
	const i = Math.floor(Math.random() * val);
	const j = Math.floor(Math.random() * val);

	if (
		gameBoard[i][j] === 0 &&
		gameBoard.some(item => item[0] !== i && item[1] !== j)
	) {
		gameBoard[7][7] = 1;
		gameBoard[i][j] = 2;
		return gameBoard;
	}

	return generateGameWithSnakeAndFood(val);
};
