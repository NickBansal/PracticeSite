import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import spaceinvaders from '../../../assets/spaceInvaders/spaceinvaders.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import SpaceInvadersGame from './SpaceInvaders';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const SpaceInvadersCard = ({ rand }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn={rand}>
			<Card.Title>Space Invaders</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={spaceinvaders}
					aria-label="Tetris game"
					placeholder="Tetris game"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<SpaceInvadersGame />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to play
			</Card.Button>
		</Card>
	);
};

export default SpaceInvadersCard;
