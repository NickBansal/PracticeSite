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

const SingleMessage = styled.p`
	font-size: ${fontSize.small};
	line-height: 20px;
	word-spacing: -1px;
	margin: 0 0 0 ${spacing.s1};
`;

const AlertMessage = styled.p`
	font-size: ${fontSize.small};
	line-height: 20px;
	word-spacing: -1px;
	text-align: center;
`;

const TimeStamp = styled.p`
	margin: 0;
	color: ${colors.pink};
	font-size: ${fontSize.small};
`;

const SingleChat = styled.div`
	margin: 4px 0 0;
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
	const [room, setRoom] = useState(undefined);

	socket.on('message', message => {
		setRoom(message.room);

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
			{showInfo && <ExtraInfo showInfo={setShowInfo} room={room} />}

			<ChatScreen id="chatScreen">
				{viewMessages.map((message, index) => (
					<SingleChat key={String(index)}>
						{message.time && (
							<TimeStamp>
								{`${message.username} - ${message.time}`}
							</TimeStamp>
						)}
						{message.alert ? (
							<AlertMessage>{message.message} </AlertMessage>
						) : (
							<SingleMessage>{message.message} </SingleMessage>
						)}
					</SingleChat>
				))}
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
