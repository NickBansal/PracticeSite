import { useState, useCallback } from 'react';

import { randomTetromino } from '../../pages/Dashboard/ArcadeCard/Arena/Games/TetrisGame/utils/tetrominos';

export const usePlayer = () => {
	const [player, setPlayer] = useState({
		pos: { x: 0, y: 0 },
		tetromino: randomTetromino().shape,
		collided: false
	});

	const updatePlayerPos = ({ x, y, collided }) => {
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
