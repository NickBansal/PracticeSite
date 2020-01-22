import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../../utils/globalStyles/constants';
import CONSTANTS from '../../../../../../constants';

import Information from './Information';

const { TETRIS_HEIGHT, TETRIS_WIDTH, TETRIS_CELLS } = CONSTANTS;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
`;

const Canvas = styled.canvas`
	border: 5px solid ${colors.pink};
`;

let myReq;

const matrix = [
	[2, 0, 0],
	[2, 2, 2],
	[0, 0, 0]
];

const TetrisGame = () => {
	const ref = useRef();

	useEffect(() => {
		const context = ref.current.getContext('2d');
		context.fillStyle = colors.black;
		context.fillRect(0, 0, ref.current.width, ref.current.height);
		context.stroke();
		let i = 0;
		const drawShape = () => {
			context.scale(TETRIS_CELLS, TETRIS_CELLS);
			const update = (time = 0) => {
				matrix.forEach((row, y) => {
					row.forEach((value, x) => {
						if (value !== 0) {
							// eslint-disable-next-line no-param-reassign
							context.clearRect(0, 0, 1, 1);
							context.beginPath();
							context.fillStyle = 'red';
							context.fillRect(x + i, y + i, 1, 1);
						}
					});
				});

				i += 0.01;
				myReq = window.requestAnimationFrame(update);
			};
			update();
		};

		drawShape();
		return () => window.cancelAnimationFrame(myReq);
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
