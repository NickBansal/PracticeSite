import React from 'react';
import styled from 'styled-components';
import {
	colors,
	spacing,
	transitionSpeed
} from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	margin-top: 36px;
	background: ${colors.purple};
	min-width: 700px;
	height: 40px;
	text-align: center;
	padding: ${spacing.s1};
`;

const Icon = styled.i`
	margin: 4px 0;
	width: 50px;
	color: white;
	float: right;
	&:hover {
		cursor: pointer;
		color: lightgrey;
	}

	transition: color ${transitionSpeed};
`;

const Speed = styled.div`
	float: left;
	display: flex;
	align-items: center;
`;

const BPM = styled.h3`
	margin: 4px ${spacing.s1};
	font-size: 1.3rem;
	color: white;
	width: 80px;
`;

const Input = styled.input`
	outline: none;
	height: 30px;
	width: 130px;
	margin-left: ${spacing.s2};

	&::-webkit-slider-horizontal {
		background: yellow;
	}
`;

const Controls = ({
	setPlaying,
	isPlaying,
	setBeat,
	bpm,
	setBpm,
	setDrums,
	volume,
	setVolume
}) => {
	const playPause = isPlaying ? 'pause' : 'play';
	let level;

	switch (volume) {
		case 0:
			level = 'mute';
			break;
		case 0.3:
			level = 'down';
			break;
		default:
			level = 'up';
	}

	return (
		<Container>
			<Speed>
				<BPM>{bpm}bpm</BPM>
				<Input
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
					setPlaying(false);
					setBeat(0);
				}}
				className="i-link fas fa-stop fa-2x"
				aria-label="Stop button"
			/>
			<Icon
				onClick={() => {
					setPlaying(!isPlaying);
				}}
				className={`i-link fas fa-${playPause} fa-2x`}
				aria-label="Play/Pause button"
			/>

			<Icon
				onClick={() => {
					setDrums([
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false),
						Array(8).fill(false)
					]);
				}}
				className="i-link fas fa-undo fa-2x"
				aria-label="Reset button"
			/>
			<Icon
				onClick={() => {
					let value;

					switch (volume) {
						case 0:
							value = 0.3;
							break;
						case 0.3:
							value = 0.7;
							break;
						default:
							value = 0;
					}

					setVolume(value);
				}}
				className={`i-link fas fa-volume-${level} fa-2x`}
				aria-label="Volume button"
			/>
		</Container>
	);
};

export default Controls;
