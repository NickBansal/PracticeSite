export default {
	grid: Array(15)
		.fill(0)
		.map(() => Array(15).fill(0)),
	snake: [[7, 7]],
	food: [9, 7],
	direction: 'pause',
	gameStart: false,
	score: 0,
	gameOver: false,
	speed: 60
};
