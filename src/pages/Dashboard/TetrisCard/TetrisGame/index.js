import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { breakPoints, colors } from '../../../../utils/globalStyles/constants';

import Information from './Information';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (min-width: ${breakPoints.mobileMax}) {
		flex-direction: row;
		align-items: flex-start;
	}
`;

const Canvas = styled.canvas`
	border: 5px solid black;
	border-radius: 10px;
`;

const TetrisGame = () => {
	const width = 300;
	const height = 600;
	const pixelRatio = 30;

	const canvas = useRef(null);

	useEffect(() => {
		const context = canvas.current.getContext('2d');

		context.scale(pixelRatio, pixelRatio);
		context.fillStyle = colors.yellow;
		context.fillRect(0, 0, width, height);

		const matrix = [[0, 0, 3], [3, 3, 3], [0, 0, 0]];

		const drawShape = shape => {
			context.scale(pixelRatio, pixelRatio);
			shape.forEach((row, y) => {
				row.forEach((value, x) => {
					if (value !== 0) {
						context.fillStyle = 'red';
						context.fillRect(x, y, 1, 1);
					}
				});
			});
		};

		drawShape(matrix);
		// eslint-disable-next-line
	}, []);

	const dw = Math.floor(pixelRatio * width);
	const dh = Math.floor(pixelRatio * height);
	const style = { width, height };

	return (
		<Container>
			{/* <Game>
				{grid.map((col, i) => (
					<Column key={String(i)}>
						{col.map((_, j) => (
							<Cells key={String(j)} />
						))}
					</Column>
				))}
			</Game> */}
			<Canvas ref={canvas} width={dw} height={dh} style={style} />
			<Information />
		</Container>
	);
};

export default TetrisGame;
