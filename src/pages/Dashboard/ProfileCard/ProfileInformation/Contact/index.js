import React from 'react';
import styled from 'styled-components';
import {
	breakPoints,
	transitionSpeed,
	fontSize
} from '../../../../../utils/globalStyles/constants';

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
	font-size: ${fontSize.title};
	margin: auto 15px;

	&:hover {
		cursor: pointer;
		color: #cac7c7;
	}

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 30px;
		margin: auto 20px;
	}

	transition: color ${transitionSpeed};
`;

const Contact = () => (
	<ContactContainer>
		<a href="mailto:bansal32182@gmail.com">
			<Icon className="i-link far fa-envelope-open" />
		</a>
		<a href="tel:+447824158048">
			<Icon className="i-link fas fa-phone" />
		</a>
	</ContactContainer>
);

export default Contact;
