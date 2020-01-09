import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../../utils/globalStyles/constants';
import CONSTANTS from '../../../../../../constants';
import pieces from './pieces';

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

// function renderGame(context) {
// 	matrix.forEach((row, y) => {
// 		context.scale(pixelRatio, pixelRatio);
// 		row.forEach((value, x) => {
// 			if (value !== 0) {
// 				context.fillStyle = 'red';
// 				context.fillRect(x, y, 1, 1);
// 			}
// 		});
// 	});
// function update(time = 0) {
// 	console.log(time);
// 	myReq = window.requestAnimationFrame(update);
// }
// update();
// }

const matrix = () => pieces[Math.floor(Math.random() * pieces.length + 1)][0];

const drawShape = context => {
	context.scale(10, 10);
	matrix().forEach((row, y) => {
		row.forEach((value, x) => {
			if (value !== 0) {
				context.fillStyle = 'red';
				context.fillRect(x, y, 1, 1);
			}
		});
	});
};

const TetrisGame = () => {
	const ref = useRef();

	useEffect(() => {
		const context = ref.current.getContext('2d');
		context.scale(PIXEL_RATIO, PIXEL_RATIO);
		context.fillStyle = colors.black;
		context.fillRect(0, 0, ref.current.width, ref.current.height);
		context.stroke();
		drawShape(context);
		// return () => window.cancelAnimationFrame(myReq);
		// eslint-disable-next-line
	}, []);

	const style = { TETRIS_WIDTH, TETRIS_HEIGHT };

	return (
		<Container>
			<Canvas
				ref={ref}
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
