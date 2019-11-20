import React from 'react';
import styled from 'styled-components';
import {
	spacing,
	fontSize,
	breakPoints
} from '../../../../../utils/globalStyles/constants';

const Container = styled.div`
	display: block;
`;

const Score = styled.div`
	border: 4px solid white;
	background: black;
	height: 40px;
	width: 340px;
	border-radius: 1rem;
	line-height: 1.6;
	text-align: center;
	padding: 0;
	font-size: ${fontSize.title};
	color: white;
	margin: 16px 16px;

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 50px;
		width: 140px;
		line-height: 2;
		padding: ${spacing.s1} 0;
		font-size: ${fontSize.title};
		margin: 0 ${spacing.s2} ${spacing.s2};
	}
`;

const Information = () => (
	<Container>
		<Score>Score: 0</Score>
		<Score>Rows: 0</Score>
		<Score>Level: 0</Score>
	</Container>
);

export default Information;
