import React, { useState } from 'react';
import styled from 'styled-components';
import Labels from './Labels';
import drumsArray from './drumsArray';
import Controls from './Controls';
import useInterval from '../../../../utils/hooks/useInterval';
import { colors } from '../../../../utils/globalStyles/constants';

const url1 = 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3';

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
	background: ${({ playing }) => (!playing ? '#000000a8' : colors.yellow)};
	transform: scale(${({ hit }) => (hit ? '1.1' : null)});
	display: block;
	&:hover {
		cursor: pointer;
		border: 1px solid white;
		border-radius: 4px;
		background: #fec95278;
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.1s;
`;

const DrumLoop = () => {
	const drumsCopy = drumsArray.slice();
	const [drums, setDrums] = useState(drumsCopy);
	const [beat, setBeat] = useState(0);
	const [isPlaying, setPlaying] = useState(false);
	const [bpm, setBpm] = useState(120);
	const [audio] = useState(new Audio(url1));

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
		isPlaying ? 60000 / bpm / 4 : null
	);

	return (
		<>
			<DrumContainer>
				<Labels />
				<Drums>
					{drums.map((col, i) => (
						<Column key={String(i)} marker={beat === i}>
							{col.map((sample, j) => {
								const hit = beat === i && sample;
								if (hit) {
									audio.play();
								}
								return (
									<Sound
										key={String(i) + String(j)}
										onClick={() => {
											const newDrums = [...drums];
											newDrums[i][j] = !sample;
											setDrums(newDrums);
										}}
										hit={hit}
										playing={sample}
									/>
								);
							})}
						</Column>
					))}
				</Drums>
			</DrumContainer>
			<Controls
				setPlaying={setPlaying}
				isPlaying={isPlaying}
				setBeat={setBeat}
				bpm={bpm}
				setBpm={setBpm}
				setDrums={setDrums}
			/>
		</>
	);
};

export default DrumLoop;
