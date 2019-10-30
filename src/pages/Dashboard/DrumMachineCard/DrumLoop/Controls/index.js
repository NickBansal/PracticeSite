import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	margin-top: ${spacing.s2};
	background: ${colors.pink};
	min-width: 714px;
	height: 40px;
	text-align: center;
`;

const Icon = styled.i`
	margin: 4px 8px;
	border-right: 1px solid black;
	border-left: 1px solid black;
	width: 60px;

	&:hover {
		cursor: pointer;
	}
`;

const Controls = ({ setPlaying, isPlaying, setBeat }) => {
	const playPause = isPlaying ? 'pause' : 'play';
	return (
		<Container>
			<Icon
				onClick={() => {
					setPlaying(!isPlaying);
				}}
				className={`i-link fas fa-${playPause} fa-2x`}
			/>
			<Icon
				onClick={() => {
					setPlaying(false);
					setBeat(0);
				}}
				className="i-link fas fa-stop fa-2x"
			/>
		</Container>
	);
};

export default Controls;
