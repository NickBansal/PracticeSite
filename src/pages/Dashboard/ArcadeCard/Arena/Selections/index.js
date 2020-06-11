import React from 'react';
import styled from 'styled-components';
import {
	colors,
	spacing,
	transitionSpeed
} from '../../../../../utils/globalStyles/constants';
import HR from '../../../../../components/HR';

const Selection = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 25%;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	font-weight: bold;
`;

const GameItem = styled.div`
	margin: 0;
	padding: ${spacing.s3};
	background: ${({ current }) =>
		current ? colors.darkYellow : colors.yellow};
	font-size: 1.2rem
	&:hover {
		cursor: pointer;
		background: ${colors.darkYellow};
	}

	transition: background ${transitionSpeed};
`;

const HRStyle = styled(HR)`
	margin: 0;
`;

const gameList = ['Snake', 'Tetris', 'Space Invaders'];

const Selections = ({ setGame, game }) => (
	<Selection>
		{gameList.map(item => {
			const current = game === item;
			return (
				<React.Fragment key={item}>
					<GameItem current={current} onClick={() => setGame(item)}>
						{item}
					</GameItem>
					<HRStyle />
				</React.Fragment>
			);
		})}
	</Selection>
);

export default Selections;
