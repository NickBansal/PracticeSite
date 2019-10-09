import React from 'react';
import styled from 'styled-components';

const ChatScreen = styled.div`
	height: 74%;
`;

const Input = styled.textarea`
	height: 17%;
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

const MessageScreen = () => (
	<>
		<ChatScreen />
		<Form
			onSubmit={e => {
				e.preventDefault();
				console.log(e.target[0].value);
			}}
		>
			<Input type="text" />
		</Form>
	</>
);

export default MessageScreen;
