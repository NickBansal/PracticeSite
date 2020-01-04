import React from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize
} from '../../../../../utils/globalStyles/constants';

const Text = styled.div`
	color: white;
	letter-spacing: 1px;
	background: ${colors.pink};
	font-size: ${fontSize.regular};
	text-align: center;
	margin: 0 auto;
	border-bottom: 5px solid ${colors.pink};
	border-left: 5px solid ${colors.pink};
	border-right: 5px solid ${colors.pink};
	width: 375px;
	min-width: 375px;

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 600px;
		font-size: ${fontSize.title};
		letter-spacing: 1.5px;
	}
`;

const Score = ({ score }) => <Text>Score: {score}</Text>;

export default Score;
