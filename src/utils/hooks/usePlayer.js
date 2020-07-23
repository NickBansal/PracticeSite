/* eslint-disable no-param-reassign */
import { useState, useCallback } from 'react';

import {
	TETROMINOS,
	randomTetromino
} from '../../pages/Dashboard/ArcadeCard/Arena/Games/TetrisGame/utils/tetrominos';

export default () => {
	const [player, setPlayer] = useState({
		pos: { x: 0, y: 0 },
		tetromino: TETROMINOS[0].shape,
		collided: false
	});

	const rotate = (matrix, dir) => {
		// Make rows to cols
		const rotatedTetro = matrix.map((_, index) =>
			matrix.map(col => col[index])
		);

		// Reverse each row
		return dir > 0
			? rotatedTetro.map(row => row.reverse())
			: rotatedTetro.reverse();
	};

	const playerRotate = (stage, dir) => {};

	const updatePlayerPos = ({ x, y, collided }) => {
		// eslint-disable-next-line no-return-assign
		setPlayer(prev => ({
			...prev,
			pos: {
				x: (prev.pos.x += x),
				y: (prev.pos.y += y)
			},
			collided
		}));
	};

	const resetPlayer = useCallback(() => {
		setPlayer({
			pos: { x: 4, y: 0 },
			tetromino: randomTetromino().shape,
			collided: false
		});
	}, []);

	return [player, updatePlayerPos, resetPlayer];
};
