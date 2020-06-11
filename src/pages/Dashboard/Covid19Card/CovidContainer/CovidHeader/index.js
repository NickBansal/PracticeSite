import React from 'react';
import styled from 'styled-components';

import { colors } from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	border-bottom: 5px solid ${colors.darkYellow};
	width: 100%;
	height: 60px;
	font-size: 22px;
	text-align: left;
`;

const Tab = styled.div`
	width: 100px;
	display: inline-block;
	color: white;
	height: 30px;
	text-align: center;
	padding: 15px;
	border: 5px solid ${colors.darkYellow};
	border-bottom: none;
	border-top-left-radius: 18px;
	border-top-right-radius: 18px;
	background: ${({ selected }) => (selected ? colors.yellow : 'none')}

	&:hover {
		background: #FEC952;
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
