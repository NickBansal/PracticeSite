import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../../utils/globalStyles/constants';
import CONSTANTS from '../../../../../../constants';

import Information from './Information';

const { TETRIS_HEIGHT, TETRIS_WIDTH, PIXEL_RATIO } = CONSTANTS;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
`;

const Canvas = styled.canvas`
	border: 5px solid ${colors.pink};
`;

const TetrisGame = () => {
	const canvas = useRef(null);
	// eslint-disable-next-line no-unused-vars
	const [state, setState] = useState({});

	useEffect(() => {
		const context = canvas.current.getContext('2d');
		context.scale(PIXEL_RATIO, PIXEL_RATIO);
		context.fillStyle = colors.black;
		context.fillRect(0, 0, TETRIS_WIDTH, TETRIS_HEIGHT);
		// eslint-disable-next-line
	}, []);

	const dw = TETRIS_WIDTH * PIXEL_RATIO;
	const dh = TETRIS_HEIGHT * PIXEL_RATIO;
	const style = { TETRIS_WIDTH, TETRIS_HEIGHT };

	return (
		<Container>
			<Canvas
				ref={canvas}
				width={dw}
				height={dh}
				style={style}
				data-testid="tetris"
			/>
			<Information />
		</Container>
	);
};

export default TetrisGame;
