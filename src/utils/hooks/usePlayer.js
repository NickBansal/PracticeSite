/* eslint-disable no-param-reassign */
import { useState, useCallback } from 'react';

import {
	TETROMINOS,
	randomTetromino
} from '../../pages/Dashboard/ArcadeCard/Arena/Games/TetrisGame/utils/tetrominos';

import { checkCollision } from '../../pages/Dashboard/ArcadeCard/Arena/Games/TetrisGame/utils/gameHelpers';

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

	const playerRotate = (stage, dir) => {
		const clonedPlayer = JSON.parse(JSON.stringify(player));
		clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, dir);

		const pos = clonedPlayer.pos.x;
		let offset = 1;

		while (checkCollision(clonedPlayer, stage, { x: 0, y: 0 })) {
			clonedPlayer.pos.x += offset;
			offset = -(offset + (offset > 0 ? 1 : -1));

			if (offset > clonedPlayer.tetromino[0].length) {
				rotate(clonedPlayer.tetromino, -dir);
				clonedPlayer.pos.x = pos;
				return;
			}
		}

		setPlayer(clonedPlayer);
	};

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

	return [player, updatePlayerPos, resetPlayer, playerRotate];
};
