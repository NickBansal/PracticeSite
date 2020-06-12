import React from 'react';
import styled from 'styled-components';

import {
	colors,
	breakPoints
} from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	border-bottom: 5px solid ${colors.darkYellow};
	width: 100%;
	height: 50px;
	font-size: 18px;
	text-align: left;

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 60px;
	}
`;

const Tab = styled.div`
	display: inline-block;
	color: white;
	height: 30px;
	text-align: center;
	padding: 10px;
	border: 5px solid ${colors.darkYellow};
	border-bottom: none;
	border-top-left-radius: 18px;
	border-top-right-radius: 18px;
	background: ${({ selected }) => (selected ? colors.darkYellow : 'none')}

	@media (min-width: ${breakPoints.mobileMax}) {
		padding: 15px;
	}

	&:hover {
		background: ${({ selected }) => (!selected ? '#FEC952' : colors.darkYellow)}
		cursor: pointer;
	}
`;

const CovidHeader = ({ setTab, tab }) => (
	<Container>
		<Tab onClick={() => setTab('Map')} selected={tab === 'Map'}>
			Map
		</Tab>
		<Tab onClick={() => setTab('Graph')} selected={tab === 'Graph'}>
			Graph
		</Tab>
	</Container>
);

export default CovidHeader;
