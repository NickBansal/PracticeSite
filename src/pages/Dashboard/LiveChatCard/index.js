import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import { LiveText } from '../../../assets/globalStyles/index';
import Overlay from '../../../components/Overlay';

const Info = styled.div`
	height: 300px;
	width: 500px;
	background: yellow;
`;

const LiveChatCard = () => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<Card fadeIn="2.0s">
			<Card.Title>
				<LiveText>Live</LiveText> chat
			</Card.Title>

			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<Info />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to enter
			</Card.Button>
		</Card>
	);
};

export default LiveChatCard;
