/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import socket from '../../../../utils/socketIO';
import {
	spacing,
	fontSize,
	colors,
	transitionSpeed
} from '../../../../assets/globalStyles/constants';
import ExtraInfo from './ExtraInfo';

const ChatScreen = styled.div`
	height: 83%;
	overflow-y: scroll;
	scroll-behavior: smooth;
`;

const Input = styled.input`
	height: 54%;
	outline: none;
	margin-top: ${spacing.s1};
	width: 94%;
	border-radius: 4px;
	font-size: ${fontSize.small};
	border: 1px solid ${({ showInfo }) => (showInfo ? 'lightgrey' : 'black')};
	padding: ${spacing.s1};
	${({ showInfo }) => (showInfo ? 'pointer-events: none' : null)};

	transition: border ${transitionSpeed};
`;

const Form = styled.form`
	height: 15%;
	&:hover {
		cursor: ${({ showInfo }) => (showInfo ? 'not-allowed' : 'pointer')};
	}
`;

const Container = styled.div`
	height: 100%;
`;

const Messages = styled.p`
	font-size: ${fontSize.small};
	line-height: 20px;
	word-spacing: -1px;
`;

const SingleMessage = styled(Messages)`
	margin: 0 ${spacing.s1};
`;

const AlertMessage = styled(Messages)`
	text-align: center;
`;

const LocationMessage = styled.a`
	font-size: ${fontSize.small};
	line-height: 20px;
	word-spacing: -1px;
`;

const TimeStamp = styled.p`
	margin: 0;
	color: ${colors.pink};
	font-size: ${fontSize.small};
`;

const SingleChat = styled.div`
	margin: 4px 0 0;
	text-align: ${({ myMessage }) => (myMessage ? 'right' : 'left')};
`;

const Icon = styled.i`
	height: 30px;
	width: 30px;
	border-radius: 4px;
	position: absolute;
	color: ${colors.cardOverlay};
	right: 16px;
	top: 16px;
	transform: rotate(${({ showInfo }) => (showInfo ? '90deg' : '270deg')});
	transition: transform ${transitionSpeed};
	&:hover {
		cursor: pointer;
	}
`;

const MessageScreen = () => {
	const [viewMessages, setViewMessages] = useState([]);
	const [showInfo, setShowInfo] = useState(false);
	const [userDetails, setUserDetails] = useState({});

	socket.on('user', ({ username, room }) => {
		setUserDetails({ room, name: username });
	});

	socket.on('message', message => {
		const newMes = viewMessages.concat(message);
		setViewMessages(newMes);

		const chatScreen = document.getElementById('chatScreen');
		chatScreen.scrollTop = chatScreen.scrollHeight;
	});

	return (
		<Container>
			<Icon
				className="i-link fas fa-chevron-up fa-2x"
				onClick={() => setShowInfo(!showInfo)}
				showInfo={showInfo}
			/>
			{showInfo && (
				<ExtraInfo showInfo={setShowInfo} userDetails={userDetails} />
			)}

			<ChatScreen id="chatScreen">
				{viewMessages.map((message, index) => {
					const myMessage = message.username === userDetails.name;
					const myText = myMessage ? 'You' : message.username;

					return (
						<SingleChat key={String(index)} myMessage={myMessage}>
							{message.time && (
								<TimeStamp>
									{`${myText} - ${message.time}`}
								</TimeStamp>
							)}
							{message.alert && !message.link && (
								<AlertMessage>{message.message}</AlertMessage>
							)}
							{!message.alert && !message.link && (
								<SingleMessage>{message.message}</SingleMessage>
							)}
							{message.link && (
								<LocationMessage
									href={message.message}
									target="_blank"
									rel="noopener noreferrer"
								>
									Click here to see my location
								</LocationMessage>
							)}
						</SingleChat>
					);
				})}
			</ChatScreen>
			<Form
				showInfo={showInfo}
				onSubmit={e => {
					e.preventDefault();
					socket.emit('sendMessage', e.target[0].value);
					e.target[0].value = '';
				}}
			>
				<Input type="text" autoFocus showInfo={showInfo} />
			</Form>
		</Container>
	);
};

export default MessageScreen;
