import React from 'react';
import styled from 'styled-components';
import socketIOClient from 'socket.io-client';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
	spacing,
	colors,
	fontSize,
	transitionSpeed
} from '../../../../assets/globalStyles/constants';

import schema from './schema';

const endpoint = 'http://127.0.0.1:8080/';
const socket = socketIOClient(endpoint);

const Label = styled.label`
	display: block;
	margin-top: ${spacing.s1};
`;

const Input = styled(Field)`
	width: 96%;
	margin: ${spacing.s1} auto;
	height: 30px;
	border-radius: 4px;
	border: 1px solid black;
	font-size: ${fontSize.regular};
	padding-left: ${spacing.s1};
`;

const StyledForm = styled(Form)`
	padding: ${spacing.s2};
`;

const Error = styled(ErrorMessage)`
	font-size: ${fontSize.small};
	text-align: center;
	color: red;
`;

const Button = styled.button`
	position: absolute;
	bottom: 70px;
	width: 30%;
	height: 30px;
	left: 50%;
	border-radius: 4px;
	font-size: ${fontSize.regular};
	color: ${colors.purple};
	border: 2px solid ${colors.purple};
	transform: translate(-50%, -50%);

	&:hover {
		cursor: pointer;
		background: ${colors.purple};
		color: white;
		border: 2px solid black;
	}

	transition: ${transitionSpeed};
`;

const registerUser = (name, cb) => {
	socket.emit('register', name, cb);
};

const ChatForm = () => (
	<Formik
		initialValues={{ username: '' }}
		onSubmit={(values, actions) => {
			actions.validateForm();
			registerUser(values);
		}}
		validationSchema={schema}
	>
		{() => (
			<StyledForm>
				<Label htmlFor="username">Username: </Label>
				<Input type="text" name="username" />
				<Error name="username" component="div" />
				<Label htmlFor="room">Chat Room: </Label>
				<Input type="text" name="room" />
				<Error name="room" component="div" />
				<Button type="submit">Join room</Button>
			</StyledForm>
		)}
	</Formik>
);

export default ChatForm;
