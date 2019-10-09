import React, { useState } from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';

const endpoint = 'http://127.0.0.1:8080/';
const socket = socketIOClient(endpoint);

const ChatScreen = styled.div`
	height: 83%;
	overflow: scroll;
`;

const Input = styled.input`
	height: 7%;
	margin-top: 8px;
	width: 94%;
	border-radius: 4px;
	font-size: 14px;
	border: 1px solid black;
	padding: 8px;
`;

const Form = styled.form`
	height: 100%;
`;

const SingleMessage = styled.p`
	margin: 0;
`;

const MessageScreen = () => {
	const [viewMessages, setViewMessages] = useState([]);

	socket.on('message', message => {
		const messageHistory = viewMessages.concat(message);
		setViewMessages(messageHistory);
	});

	return (
		<>
			<ChatScreen>
				{viewMessages.map(message => (
					<SingleMessage key={Date.now()}>{message}</SingleMessage>
				))}
			</ChatScreen>
			<Form
				onSubmit={e => {
					e.preventDefault();
					socket.emit('sendMessage', e.target[0].value);
					e.target[0].value = '';
				}}
			>
				<Input type="text" />
			</Form>
		</>
	);
};

export default MessageScreen;
