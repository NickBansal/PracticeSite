import React, { useRef, useEffect } from 'react';
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

let myReq;

function createEngine() {
	function update(time = 0) {
		myReq = window.requestAnimationFrame(update);
	}
	update();
}

const TetrisGame = () => {
	const canvas = useRef(null);

	useEffect(() => {
		const context = canvas.current.getContext('2d');
		context.scale(PIXEL_RATIO, PIXEL_RATIO);
		context.fillStyle = colors.black;
		context.fillRect(0, 0, TETRIS_WIDTH, TETRIS_HEIGHT);

		createEngine();
		return () => window.cancelAnimationFrame(myReq);
		// eslint-disable-next-line
	}, []);

	const style = { TETRIS_WIDTH, TETRIS_HEIGHT };

	return (
		<Container>
			<Canvas
				ref={canvas}
				width={TETRIS_WIDTH}
				height={TETRIS_HEIGHT}
				style={style}
				data-testid="tetris"
			/>
			<Information />
		</Container>
	);
};

export default TetrisGame;
