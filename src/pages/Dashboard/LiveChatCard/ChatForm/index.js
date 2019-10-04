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
	margin: 8px auto;
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
	bottom: 80px;
	width: 80%;
	left: 32px;
	height: 27px;
	border-radius: 8px;
	font-size: 16px;
	color: #212c27;
	border: 2px solid #212c27;

	&:hover {
		cursor: pointer;
		background: #212c27;
		color: white;
	}

	transition: 0.3s;
`;

const ChatForm = () => (
	<Formik
		initialValues={{ username: '', room: '' }}
		onSubmit={values => console.log(values)}
		validationSchema={schema}
	>
		{() => (
			<StyledForm>
				<Label htmlFor="username">Username: </Label>
				<Input type="text" name="username" />
				<Error name="username" component="div" />
				<Label htmlFor="room">Room: </Label>
				<Input type="text" name="room" />
				<Error name="room" component="div" />
				<Button type="submit">Submit</Button>
			</StyledForm>
		)}
	</Formik>
);

export default ChatForm;
