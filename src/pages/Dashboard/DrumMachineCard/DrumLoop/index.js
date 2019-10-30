import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../utils/globalStyles/constants';
import Labels from './Labels';

const DrumContainer = styled.div`
	height: 376px;
	min-width: 730px;
	display: flex;
`;

const Controls = styled.div`
	margin-top: ${spacing.s2};
	background: ${colors.pink};
	min-width: 714px;
	height: 40px;
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
		background: ${colors.orange};
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.1s;
`;

const DrumLoop = () => {
	const [drums, setDrums] = useState([
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
