import React from 'react';
import styled from 'styled-components';
import nc from '../../../../assets/profile/nc.JPG';
import background from '../../../../assets/profile/background.JPG';
import { spacing } from '../../../../assets/globalStyles/constants';

const Profile = styled.div`
	height: 300px;
	background: white;
	border-radius: 8px;
`;

const Image = styled.img`
	width: 245px;
	height: 170px;
	border-radius: 50px;
	margin-top: ${spacing.s2};
	border: 5px solid white;
`;

const Header = styled.div`
	background-image: url(${background});
	text-align: center;
	height: 150px;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
`;

const ProfileInformation = () => (
	<Profile>
		<Header>
			<Image src={nc} alt="Me" />
		</Header>
	</Profile>
);

export default ProfileInformation;
