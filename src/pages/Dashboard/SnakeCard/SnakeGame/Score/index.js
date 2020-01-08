import React from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize,
	spacing
} from '../../../../../utils/globalStyles/constants';
import { speedLevel } from '../snake';

const Text = styled.div`
	color: white;
	letter-spacing: 1px;
	display: flex;
	justify-content: space-around;
	background: ${colors.pink};
	font-size: ${fontSize.title};
	text-align: center;
	margin: 0 auto;
	border: 5px solid ${colors.pink};
	border-top: 0;

	border-bottom-right-radius: 4px;
	width: 530px;
	letter-spacing: 1.5px;
	padding: 5px;
`;

const Level = styled.div`
	display: flex;
	align-items: center;
`;

const Outer = styled.div`
	width: 150px;
	height: 15px;
	background: none;
	margin-left: ${spacing.s1};
	border-radius: 10px;
	position: relative;
	border: 1px solid white;

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 20px;
	}
`;

const Inner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: ${({ speed }) => String(speed)}px;
	height: 15px;
	background: white;
	border-bottom-left-radius: 8px;
	border-top-left-radius: 8px;
	border-bottom-right-radius: ${({ speed }) => (speed >= 140 ? '8' : '0')}px;
	border-top-right-radius: ${({ speed }) => (speed >= 140 ? '8' : '0')}px;
	transition: width 0.5s;

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 20px;
	}
`;

const Score = ({ score, speed }) => {
	return (
		<Text>
			<div>Score: {score}</div>
			<Level>
				Level:{' '}
				<Outer>
					<Inner speed={speedLevel[speed / 5]} />
				</Outer>
			</Level>
		</Text>
	);
};

export default Score;
