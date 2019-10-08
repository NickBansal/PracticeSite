import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { spacing } from '../../../../assets/globalStyles/constants';

import schema from './schema';

const Label = styled.label`
	display: block;
	margin-top: ${spacing.s1};
`;

const Input = styled(Field)`
	width: 98%;
	margin: ${spacing.s1} auto;
	height: 30px;
	border-radius: 4px;
	border: 1px solid black;
	font-size: 16px;
`;

const StyledForm = styled(Form)`
	padding: ${spacing.s2};
`;

const Error = styled(ErrorMessage)`
	font-size: 12px;
	text-align: center;
	color: red;
`;

const Button = styled.button`
	position: absolute;
	bottom: 70px;
	width: 80%;
	left: 50%;
	height: 27px;
	border-radius: 8px;
	font-size: 16px;
	color: #87518b;
	border: 2px solid #87518b;
	transform: translate(-50%, -50%);

	&:hover {
		cursor: pointer;
		background: #87518b;
		color: white;
	}

	transition: 0.3s;
`;

const ChatForm = () => (
	<Formik
		initialValues={{ username: '', room: '' }}
		onSubmit={(values, actions) => {
			actions.validateForm();
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
				<Button type="submit">Submit</Button>
			</StyledForm>
		)}
	</Formik>
);

export default ChatForm;
