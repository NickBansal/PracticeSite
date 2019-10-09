/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';
import {
	spacing,
	fontSize,
	colors
} from '../../../../assets/globalStyles/constants';

const endpoint = 'http://127.0.0.1:8080/';
const socket = socketIOClient(endpoint);

const ChatScreen = styled.div`
	height: 83%;
	overflow-y: scroll;
	scroll-behavior: smooth;
`;

const Input = styled.input`
	height: 7%;
	margin-top: ${spacing.s1};
	width: 94%;
	border-radius: 4px;
	font-size: ${fontSize.small};
	border: 1px solid black;
	padding: ${spacing.s1};
`;

const Form = styled.form`
	height: 100%;
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

const TimeStamp = styled.p`
	margin: 0;
	color: ${colors.pink};
	font-size: ${fontSize.small};
`;

const SingleChat = styled.div`
	margin: 4px 0 0;
`;

const MessageScreen = () => {
	const [viewMessages, setViewMessages] = useState([]);

	socket.on('message', message => {
		if (viewMessages.find(item => item === message)) {
			setViewMessages(viewMessages);
		} else {
			const newMes = viewMessages.concat(message);
			setViewMessages(newMes);
		}
	});

	return (
		<Container>
			<ChatScreen>
				{viewMessages.map((message, index) => (
					<SingleChat key={String(index)}>
						{message.time && (
							<TimeStamp>
								{`Some username - ${message.time}`}
							</TimeStamp>
						)}
						<SingleMessage>{message.message} </SingleMessage>
					</SingleChat>
				))}
			</ChatScreen>
			<Form
				onSubmit={e => {
					e.preventDefault();
					socket.emit('sendMessage', e.target[0].value);
					e.target[0].value = '';
				}}
			>
				<Input type="text" autoFocus />
			</Form>
		</Container>
	);
};

export default MessageScreen;