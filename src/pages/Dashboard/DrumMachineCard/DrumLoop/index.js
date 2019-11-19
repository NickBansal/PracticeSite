import React, { useState } from 'react';
import styled from 'styled-components';
import drumsArray from './drumsArray';
import useInterval from '../../../../utils/hooks/useInterval';
import samples from '../../../../assets/drumSamples';
import colorScheme from './colorScheme';
import Markers from './Markers';
import Labels from './Labels';
import Controls from './Controls';

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
	background: ${({ playing, yCoord }) =>
		!playing ? '#000000a8' : colorScheme[yCoord]};
	transform: scale(${({ hit }) => (hit ? '1.1' : null)});
	display: block;
	&:hover {
		cursor: pointer;
		border: 1px solid white;
		border-radius: 4px;
		background: ${({ yCoord }) => `${colorScheme[yCoord]}78`};
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
	const [bpm, setBpm] = useState(80);
	const [volume, setVolume] = useState(0);

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
				<Markers beat={beat} />
				<Labels />
				<Drums>
					{drums.map((col, i) => (
						<Column key={String(i)} marker={beat === i}>
							{col.map((sample, j) => {
								const hit = beat === i && sample;

								if (hit) {
									const audio = new Audio(samples[j]);
									audio.volume = volume;
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
										yCoord={j}
										aria-label="drum-sample"
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
				volume={volume}
				setVolume={setVolume}
			/>
		</>
	);
};

export default DrumLoop;
