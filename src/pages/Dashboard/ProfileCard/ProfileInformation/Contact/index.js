import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
	width: 100%;
	height: 60px;
	position: absolute;
	bottom: 0;
	left: 0;
	text-align: center;
`;

const Icon = styled.i`
	color: white;
	font-size: 30px;
	margin: auto 20px;

	&:hover {
		cursor: pointer;
	}
`;

const Contact = () => (
	<ContactContainer>
		<Icon
			onClick={() => {
				window.location.href = `mailto:bansal32182@gmail.com`;
			}}
			className="i-link far fa-envelope-open"
			aria-label="contact icons"
		/>
		<Icon className="i-link fas fa-phone" aria-label="contact icons" />
	</ContactContainer>
);

export default Contact;
