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
`;

const TetrisGame = (props = {}) => {
	const { width = 300, height = 600, pixelRatio = 30 } = props;

	const canvas = useRef(null);

	useEffect(() => {
		const context = canvas.current.getContext('2d');

		context.save();
		context.scale(pixelRatio, pixelRatio);
		context.fillStyle = colors.yellow;
		context.fillRect(0, 0, width, height);
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
