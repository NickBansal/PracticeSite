import React from 'react';
import styled from 'styled-components';
import nc from '../../../../assets/profile/nc.JPG';
import background from '../../../../assets/profile/background.JPG';
import { breakPoints } from '../../../../assets/globalStyles/constants';

import Skills from './Skills';
import Links from './Links';
import Contact from './Contact';

const Profile = styled.div`
	background: white;
	border-radius: 8px;
	border: 5px solid white;
`;

const Image = styled.img`
	width: 245px;
	height: 170px;
	border-radius: 50px;
	margin-top: 50px;
	border: 5px solid white;

	@media (min-width: ${breakPoints.mobileMax}) {
		margin-left: 50px;
	}
`;

const Header = styled.div`
	background-image: url(${background});
	text-align: center;
	height: 150px;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;

	@media (min-width: ${breakPoints.mobileMax}) {
		text-align: left;
	}
`;

const Title = styled.h1`
	display: block;
	position: relative;
	top: -20px;
	left: 0;
	font-size: 1.5rem;

	@media (min-width: ${breakPoints.mobileMax}) {
		font-size: 2.5rem;
		display: inline-block;
		left: 60px;
		top: -30px;
	}
`;

const Content = styled.div`
	background-image: linear-gradient(white, white, #c27f82);
	height: 350px;
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 8px;
`;

const ProfileInformation = () => (
	<Profile>
		<Header>
			<Image src={nc} alt="Me" />
			<Title>Nick Bansal</Title>
		</Header>
		<Content>
			<Skills />
			<Links />
			<Contact />
		</Content>
	</Profile>
);

export default ProfileInformation;
