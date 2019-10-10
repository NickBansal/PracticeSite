/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import socket from '../../../../utils/socketIO';
import {
	spacing,
	fontSize,
	colors
} from '../../../../assets/globalStyles/constants';
import ExtraInfo from './ExtraInfo';

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

const Icon = styled.i`
	height: 30px;
	width: 30px;
	border-radius: 4px;
	position: absolute;
	right: 16px;
	top: 16px;
	transform: rotate(${({ showInfo }) => (showInfo ? '90deg' : '270deg')});
	transition: transform 0.3s;
	&:hover {
		cursor: pointer;
	}
`;

const MessageScreen = () => {
	const [viewMessages, setViewMessages] = useState([]);
	const [showInfo, setShowInfo] = useState(false);

	socket.on('message', message => {
		if (viewMessages.some(item => item.message === message.message)) {
			setViewMessages(viewMessages);
		} else {
			const newMes = viewMessages.concat(message);
			setViewMessages(newMes);
		}
	});

	return (
		<Container>
			<Icon
				className="i-link fas fa-chevron-up fa-2x"
				onClick={() => setShowInfo(!showInfo)}
				showInfo={showInfo}
			/>
			{showInfo && <ExtraInfo />}

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
