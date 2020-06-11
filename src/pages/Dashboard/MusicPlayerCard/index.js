import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/lazy';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import musicProd from '../../../assets/musicProd/musicProd.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';

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
			<Card.Title>Music Player</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={musicProd}
					aria-label="Arcade card"
					placeholder="Arcade card"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<ReactPlayer
					playing={false}
					url="https://soundcloud.com/bansal321/sets/lockdown"
					style={{
						margin: 'auto'
					}}
				/>
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to play
			</Card.Button>
		</Card>
	);
};

export default ArcadeCard;
