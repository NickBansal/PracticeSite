import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/globalStyles/constants';

const Canvas = styled.canvas`
	border: 5px solid white;
	border-radius: 10px;
`;

const width = 500;
const height = 500;
const pixelRatio = window.devicePixelRatio || 1;

const SpaceInvadersGame = () => {
	const canvas = useRef(null);
	// eslint-disable-next-line no-unused-vars
	const [state, setState] = useState({ width, height, pixelRatio });

	useEffect(() => {
		const context = canvas.current.getContext('2d');
		context.scale(pixelRatio, pixelRatio);
		context.fillStyle = colors.blue;
		context.fillRect(0, 0, width, height);
		// eslint-disable-next-line
    }, []);

	const dw = state.width * state.pixelRatio;
	const dh = state.height * state.pixelRatio;
	const style = { width, height };

	return <Canvas ref={canvas} width={dw} height={dh} style={style} />;
};

export default SpaceInvadersGame;
