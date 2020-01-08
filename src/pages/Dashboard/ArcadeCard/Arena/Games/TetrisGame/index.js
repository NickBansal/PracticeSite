import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../../../utils/globalStyles/constants';

import Information from './Information';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
`;

const Canvas = styled.canvas`
	border: 5px solid ${colors.pink};
`;

const width = 290;
const height = 580;
const pixelRatio = window.devicePixelRatio || 1;

const TetrisGame = () => {
	const canvas = useRef(null);
	const [state, setState] = useState({ width, height, pixelRatio });

	useEffect(() => {
		const context = canvas.current.getContext('2d');
		context.scale(pixelRatio, pixelRatio);
		context.fillStyle = colors.black;
		context.fillRect(0, 0, width, height);
		// eslint-disable-next-line
	}, []);

	const dw = state.width * state.pixelRatio;
	const dh = state.height * state.pixelRatio;
	const style = { width, height };

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
