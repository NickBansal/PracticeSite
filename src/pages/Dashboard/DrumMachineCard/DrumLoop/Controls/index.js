import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	margin-top: ${spacing.s2};
	background: ${colors.pink};
	min-width: 700px;
	height: 40px;
	text-align: center;
	padding: 0 8px;
`;

const Icon = styled.i`
	margin: 4px 0;
	border-right: 1px solid black;
	border-left: 1px solid black;
	width: 60px;

	&:hover {
		cursor: pointer;
	}
`;

const Speed = styled.div`
	float: left;
`;

const BPM = styled.h3`
	margin: 5px 0;
`;

const Controls = ({ setPlaying, isPlaying, setBeat, bpm, setBpm }) => {
	const playPause = isPlaying ? 'pause' : 'play';
	return (
		<Container>
			<Speed>
				<BPM>BPM</BPM>
				<input
					id="typeinp"
					type="range"
					min="60"
					max="180"
					value={bpm}
					onChange={e => setBpm(e.target.value)}
					step="10"
				/>
			</Speed>
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
