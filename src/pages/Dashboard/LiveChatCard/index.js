import React, { useState } from 'react';
import Card from '../../../components/Card';
import { LiveText } from '../../../assets/globalStyles/index';
import ChatForm from './ChatForm';
import MessageScreen from './MessageScreen';

const LiveChatCard = () => {
	const [messageScreen, setMessageScreen] = useState(false);
	const [userDetails, setuserDetails] = useState(false);
	const chatRoomText = messageScreen || userDetails ? 'Leave' : 'Enter';

	const showMessageScreen = () => {
		setMessageScreen(true);
		setuserDetails(false);
	};

	return (
		<Card fadeIn="2.0s">
			<Card.Title>
				<LiveText>Live</LiveText> chat
			</Card.Title>

			<Card.Content>
				{!messageScreen && userDetails && (
					<ChatForm showMessageScreen={showMessageScreen} />
				)}
				{messageScreen && !userDetails && <MessageScreen />}
			</Card.Content>

			<Card.Button
				onClick={() => {
					if (!messageScreen && !userDetails) {
						setuserDetails(true);
					} else {
						setuserDetails(false);
						setMessageScreen(false);
					}
				}}
			>
				{`Click to ${chatRoomText}`}
			</Card.Button>
		</Card>
	);
};

export default LiveChatCard;
