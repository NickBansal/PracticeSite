import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import socket from '../../../../utils/socketIO';
import {
	spacing,
	colors,
	fontSize,
	transitionSpeed
} from '../../../../utils/globalStyles/constants';

import schema from './schema';

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

	transition: color ${transitionSpeed}, border ${transitionSpeed},
		background ${transitionSpeed};
`;

const ChatForm = ({ showMessageScreen }) => (
	<Formik
		initialValues={{ username: '', room: '' }}
		onSubmit={(values, actions) => {
			actions.validateForm();
			showMessageScreen();
			socket.emit('joinRoom', values);
		}}
		validationSchema={schema}
	>
		{formik => (
			<StyledForm onSubmit={formik.handleSubmit}>
				<Label htmlFor="username">Username: </Label>
				<Input type="text" name="username" />
				<Error name="username" component="div" />
				<Label htmlFor="room">Chat Room: </Label>
				<Input type="text" name="room" autoComplete="off" />
				<Error name="room" component="div" />
				<Button type="submit">Join room</Button>
			</StyledForm>
		)}
	</Formik>
);

export default ChatForm;
