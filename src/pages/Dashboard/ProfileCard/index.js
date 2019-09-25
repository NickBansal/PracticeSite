import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import profilePicture from '../../../assets/profile/me.JPG';
import BlurImageLoader from '../../../components/BlurImageLoader';
import { HR } from '../../../assets/globalStyles/index';
import {
	spacing,
	fontSize
} from '../../../assets/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import ProfileInformation from './ProfileInformation';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: 4px 11px 55px -21px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 4px 11px 55px -21px rgba(0, 0, 0, 0.75);
	box-shadow: 4px 11px 55px -21px rgba(0, 0, 0, 0.75);
	border-radius: 10px;
	margin-bottom: ${spacing.s2};
	border: 2px solid #00000030;
`;

const ProfileText = styled.p`
	text-align: center;
	font-size: ${fontSize.title};
	margin: ${spacing.s1};
	font-family: 'Dancing Script', cursive;
`;

const Name = styled.p`
	text-align: center;
	font-size: ${fontSize.title};
	margin: ${spacing.s2} ${spacing.s1} ${spacing.s1};
	font-family: 'Dancing Script', cursive;
`;

const ProfileCard = () => {
	const [showOverlay, setShowOverlay] = useState(false);

	return (
		<Card fadeIn="1.0s">
			<Image
				width="210px"
				height="220px"
				image={profilePicture}
				aria-label="Profile picture"
				placeholder="Profile picture"
			/>
			<HR />

			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<ProfileInformation />
			</Overlay>

			<Name>
				<strong>Nick Bansal</strong>
			</Name>
			<ProfileText>
				<strong>Junior Web Developer</strong>
			</ProfileText>

			<Card.Button onClick={() => setShowOverlay(true)}>
				View full profile
			</Card.Button>
		</Card>
	);
};

export default ProfileCard;
