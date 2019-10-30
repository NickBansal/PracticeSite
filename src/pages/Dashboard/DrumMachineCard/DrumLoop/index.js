import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../utils/globalStyles/constants';
import Labels from './Labels';
import drumsArray from './drumsArray';
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

	// useEffect(() => {
	// 	const bpm = setInterval(() => {
	// 		const newBeat = (beat += 1);
	// 		setBeat(newBeat);
	// 	}, 1000);

	// 	return clearInterval(bpm);
	// }, []);
	// console.log(beat);
	return (
		<>
			<DrumContainer>
				<Labels />
				<Drums>
					{drums.map((col, i) => (
						<Column key={String(i)}>
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
			<Controls />
		</>
	);
};

export default DrumLoop;
