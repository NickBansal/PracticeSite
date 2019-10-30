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
	background: #000000a8;

	&:hover {
		cursor: pointer;
		border: 1px solid white;
		border-radius: 4px;
		background: ${colors.cardOverlay};
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.1s;
`;

const drumsArray = Array(16).fill(Array(8).fill({ hit: false, value: null }));

const DrumLoop = () => {
	const [drums, setDrums] = useState(drumsArray);
	return (
		<>
			<DrumContainer>
				<Labels />
				<Drums>
					{drums.map((column, index) => (
						<Column key={String(index)}>
							{column.map((sound, i) => (
								<Sound
									key={String(i)}
									onClick={() => {
										drumsArray[index][i] = {
											hit: true,
											value: null
										};
										setDrums(drumsArray);
										console.log(drumsArray);
									}}
								>
									{sound.value}
								</Sound>
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