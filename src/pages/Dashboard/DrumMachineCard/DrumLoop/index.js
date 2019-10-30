import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../utils/globalStyles/constants';

const WhiteBox = styled.div`
	height: 500px;
	background: white;
	min-width: 700px;
`;

const Controls = styled.div`
	margin-top: ${spacing.s2};
	background: ${colors.pink};
	min-width: 700px;
	height: 40px;
`;

const DrumLoop = () => (
	<>
		<WhiteBox />
		<Controls />
	</>
);

export default DrumLoop;
