import React, { useState } from 'react';
import styled from 'styled-components';
import Labels from './Labels';
import drumsArray from './drumsArray';
import Controls from './Controls';
import useInterval from '../../../../utils/hooks/useInterval';
import Samples from './Samples';

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

const DrumLoop = () => {
	const drumsCopy = drumsArray.slice();
	const [drums, setDrums] = useState(drumsCopy);
	const [beat, setBeat] = useState(0);
	const [isPlaying, setPlaying] = useState(false);
	const [bpm, setBpm] = useState(120);

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
								const handleClick = () => {
									const newDrums = [...drums];
									newDrums[i][j] = !sample;
									setDrums(newDrums);
								};
								return (
									<Samples
										key={String(i) + String(j)}
										sample={sample}
										handleClick={handleClick}
										hit={beat === i && sample}
										yCoord={j}
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
