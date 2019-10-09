import React, { useState } from 'react';
import Card from '../../../components/Card';
import { LiveText } from '../../../assets/globalStyles/index';
// import ChatForm from './ChatForm';
import MessageScreen from './MessageScreen';

const LiveChatCard = () => {
	const [showOverlay, setShowOverlay] = useState(false);
	const chatRoomText = showOverlay ? 'Leave' : 'Enter';
	return (
		<Card fadeIn="2.0s">
			<Card.Title>
				<LiveText>Live</LiveText> chat
			</Card.Title>

			<Card.Content>{showOverlay && <MessageScreen />}</Card.Content>

			<Card.Button onClick={() => setShowOverlay(!showOverlay)}>
				{`Click to ${chatRoomText}`}
			</Card.Button>
		</Card>
	);
};

export default LiveChatCard;
