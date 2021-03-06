import React, { useState } from 'react';
import Card from '../../../components/Card';
import LiveText from '../../../components/LiveText';
import ChatForm from './ChatForm';
import MessageScreen from './MessageScreen';

const LiveChatCard = ({ rand }) => {
	const [messageScreen, setMessageScreen] = useState(false);
	const [userDetails, setuserDetails] = useState(false);
	const chatRoomText = messageScreen ? 'Leave' : 'Enter';

	const showMessageScreen = () => {
		setMessageScreen(true);
		setuserDetails(false);
	};

	const showChatForm = !messageScreen && userDetails;

	return (
		<Card fadeIn={rand}>
			<Card.Title>
				<LiveText>Live</LiveText> chat
			</Card.Title>
			<Card.Content>
				{showChatForm && (
					<ChatForm showMessageScreen={showMessageScreen} />
				)}
				{messageScreen && !userDetails && <MessageScreen />}
			</Card.Content>

			{!showChatForm && (
				<Card.Button
					onClick={() => {
						if (!messageScreen && !userDetails) {
							setuserDetails(true);
						} else {
							setMessageScreen(false);
						}
					}}
				>
					{`Click to ${chatRoomText}`}
				</Card.Button>
			)}
		</Card>
	);
};

export default LiveChatCard;
