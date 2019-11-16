export const gameBoard = row => [
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

export const generateFood = (val, array) => {
	const i = Math.floor(Math.random() * val);
	const j = Math.floor(Math.random() * val);

	if (
		array[i][j] === 0 &&
		array.some(item => item[0] !== i && item[1] !== j)
	) {
		return [i, j];
	}

	return generateFood(val);
};
