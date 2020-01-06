import React from 'react';
import styled from 'styled-components';
import {
	colors,
	breakPoints,
	fontSize,
	spacing
} from '../../../../../utils/globalStyles/constants';

const Text = styled.div`
	color: white;
	letter-spacing: 1px;
	display: flex;
	justify-content: space-around;
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

const Level = styled.div`
	display: flex;
	align-items: center;
`;

const Outer = styled.div`
	width: 150px;
	height: 20px;
	background: none;
	margin-left: ${spacing.s1};
	border-radius: 10px;
	position: relative;
	border: 1px solid white;
`;

const Inner = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: ${({ speed }) => String(speed)}px;
	height: 20px;
	background: white;
	border-radius: 8px;
	transition: width 0.5s;
`;

const Score = ({ score, speed }) => {
	const speedLevel = {
		12: 12.5,
		11: 25,
		10: 37.5,
		9: 50,
		8: 62.5,
		7: 75,
		6: 87.5,
		5: 100,
		4: 112.5,
		3: 120.5,
		2: 137.5,
		1: 150
	};

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
