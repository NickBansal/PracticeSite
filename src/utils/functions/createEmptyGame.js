export default (rows, cols) =>
	Array(rows)
		.fill(0)
		.map(() => Array(cols).fill(0));
