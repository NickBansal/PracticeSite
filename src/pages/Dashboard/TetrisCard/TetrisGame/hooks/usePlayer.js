import { useState } from 'react';
import randomPieces from '../pieces';

export default () => {
	const [player, setPlayer] = useState({
		pos: {
			x: 0,
			y: 0
		},
		tetrisShape: randomPieces()
	});

	return [player];
};
