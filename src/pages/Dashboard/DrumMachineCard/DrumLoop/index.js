import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../utils/globalStyles/constants';

const DrumContainer = styled.div`
	height: 500px;
	min-width: 700px;
	display: flex;
	align-items: center;
`;

const Controls = styled.div`
	margin-top: ${spacing.s2};
	background: ${colors.pink};
	min-width: 700px;
	height: 40px;
`;

const Labels = styled.div`
	height: 100%;
	width: 15%
	background: ${colors.orange};
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

	&:hover {
		cursor: pointer;
		border: 1px solid white;
		background: black;
	}

	&:active {
		transform: scale(1.1);
	}

	transition: transform 0.3s;
`;

const DrumLoop = () => {
	const [drums, setDrums] = useState(Array(16).fill(Array(8).fill(null)));
	return (
		<>
			<DrumContainer>
				<Labels />
				<Drums>
					{drums.map((column, index) => (
						<Column key={String(index)}>
							{column.map((sound, i) => (
								<Sound key={String(i)}>{sound}</Sound>
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
