import React from 'react';
import styled from 'styled-components';
import {
	fontSize,
	spacing
} from '../../../../../../../utils/globalStyles/constants';
import { HR } from '../../../../../../../utils/globalStyles';

const Container = styled.div`
	display: block;
	padding: ${spacing.s2} 0;
`;

const Info = styled.div`
	height: 40px;
	width: 250px;
	border-radius: 1rem;
	line-height: 1.6;
	text-align: center;
	padding: 0;
	font-size: 1.3rem;
	color: black;
`;

const Information = () => (
	<Container>
		<Info>Score: 0</Info>
		<HR />
		<Info>Rows: 0</Info>
		<HR />
		<Info>Level: 0</Info>
	</Container>
);

export default Information;
