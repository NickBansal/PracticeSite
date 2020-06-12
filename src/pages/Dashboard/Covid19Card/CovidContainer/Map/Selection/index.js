import React from 'react';
import styled from 'styled-components';

import { breakPoints } from '../../../../../../utils/globalStyles/constants';

const Title = styled.h2`
	position: absolute;
	top: 60px;
	z-index: 500;
	left: 50%;
	transform: translate(-50%, -50%);

	@media (min-width: ${breakPoints.mobileMax}) {
		top: 70px;
	}
`;

const MapSelection = ({ title }) => (
	<Title>
		<u>Total {title}</u>
	</Title>
);

export default MapSelection;
