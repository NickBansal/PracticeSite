const pieces = {
	0: [[0]],
	I: [[0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0], [0, 'I', 0, 0]],
	T: [['T', 'T', 'T'], [0, 'T', 0], [0, 0, 0]],
	J: [[0, 0, 0], ['J', 0, 0], ['J', 'J', 'J']],
	l: [[0, 0, 0], [0, 0, 'L'], ['L', 'L', 'L']],
	O: [['O', 'O'], ['O', 'O']],
	S: [[0, 0, 0], [0, 'S', 'S'], ['S', 'S', 0]],
	Z: [[0, 0, 0], ['Z', 'Z', 0], [0, 'Z', 'Z']]
};

export default () => {
	const keys = Object.keys(pieces);
	return pieces[keys[Math.floor(keys.length * Math.random())]];
};
