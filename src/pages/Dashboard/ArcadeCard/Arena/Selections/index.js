import React from 'react';
import styled from 'styled-components';
import { colors, spacing } from '../../../../../utils/globalStyles/constants';
import { HR } from '../../../../../utils/globalStyles';

const Selection = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 25%;
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	font-weight: bold;
`;

const GameItem = styled.p`
	margin: 0;
	padding: ${spacing.s3};
	font-size: 1.2rem
	&:hover {
		cursor: pointer;
		background: ${colors.darkYellow};
	}

	transition: background 0.3s;
`;

const HRStyle = styled(HR)`
	margin: 0;
`;

const gameList = ['Snake', 'Tetris', 'Space Invaders'];

const Selections = ({ setGame }) => (
	<Selection>
		{gameList.map(game => {
			return (
				<React.Fragment key={game}>
					<GameItem>{game}</GameItem>
					<HRStyle />
				</React.Fragment>
			);
		})}
	</Selection>
);

export default Selections;
