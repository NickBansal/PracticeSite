import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/globalStyles/constants';
import Labels from './Labels';
import drumsArray from './drumsArray';
import Controls from './Controls';
import useInterval from '../../../../utils/hooks/useInterval';

const DrumContainer = styled.div`
	height: 376px;
	min-width: 730px;
	display: flex;
`;

const Drums = styled.div`
	width: 550px;
	width: 85%;
`;

const Column = styled.div`
	display: inline-block;

	background: ${({ marker }) => (marker ? '#ffffff9e' : null)};
`;

const Sound = styled.div`
	min-width: 35px;
	height: 45px;
	border: 1px solid #ffffff66;
	background: ${({ playing }) => (!playing ? '#000000a8' : colors.orange)}

	&:hover {
		cursor: pointer;
		border: 1px solid white;
		border-radius: 4px;
		background: #ff330078;
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.1s;
`;

const DrumLoop = () => {
	const [drums, setDrums] = useState(drumsArray);
	const [beat, setBeat] = useState(0);
	const [isPlaying, setPlaying] = useState(false);

	useInterval(
		() => {
			let newBeat;
			if (beat === 15) {
				newBeat = 0;
			} else {
				newBeat = beat + 1;
			}
			setBeat(newBeat);
		},
		isPlaying ? 375 : null
	);

	return (
		<>
			<DrumContainer>
				<Labels />
				<Drums>
					{drums.map((col, i) => (
						<Column key={String(i)} marker={beat === i}>
							{col.map((sample, j) => (
								<Sound
									playing={sample}
									key={String(j)}
									onClick={() => {
										const newDrums = [...drums];
										newDrums[i][j] = !sample;
										setDrums(newDrums);
									}}
								/>
							))}
						</Column>
					))}
				</Drums>
			</DrumContainer>
			<Controls
				setPlaying={setPlaying}
				isPlaying={isPlaying}
				setBeat={setBeat}
			/>
		</>
	);
};

export default DrumLoop;
