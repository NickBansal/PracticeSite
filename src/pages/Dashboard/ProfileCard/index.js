import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import profilePicture from '../../../assets/profile/me.JPG';
import BlurImageLoader from '../../../components/BlurImageLoader';
import { HR } from '../../../assets/globalStyles/index';
import Button from '../../../components/Button';
import { spacing, fontSize } from '../../../assets/globalStyles/constants/index';

const Image = styled(BlurImageLoader)`
    -webkit-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
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
    font-size: ${fontSize.title};;
    margin: ${spacing.s3} ${spacing.s1} ${spacing.s1};
    font-family: 'Dancing Script', cursive;
`;

const ProfileCard = () => (
    <Card fadeIn="1.0s">
        <Image
            width="210px"
            height="220px"
            image={profilePicture}
            alt="Profile picture"
            placeholder="Profile picture"
        />
        <HR />

        <Name>Nick Bansal</Name>
        <ProfileText>Junior Web Developer</ProfileText>

        <Button onClick={() => { }}>See full profile</Button>
    </Card>
);

export default ProfileCard;
