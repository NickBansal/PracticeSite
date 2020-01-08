import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import arcade from '../../../assets/arcade/arcade.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import Arena from './Arena';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const ArcadeCard = ({ rand }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn={rand}>
			<Card.Title>Arcade games</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={arcade}
					aria-label="Arcade card"
					placeholder="Arcade card"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<Arena />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to play
			</Card.Button>
		</Card>
	);
};

export default ArcadeCard;
