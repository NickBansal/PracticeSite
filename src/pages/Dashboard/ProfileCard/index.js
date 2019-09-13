import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import profilePicture from '../../../assets/profile/me.JPG';
import BlurImageLoader from '../../../components/BlurImageLoader';
import { HR } from '../../../assets/globalStyles/index';

const Image = styled(BlurImageLoader)`
    -webkit-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    border-radius: 10px;
    margin-bottom: 16px;
`;

const ProfileText = styled.p`
    text-align: center;
    font-size: 24px;
    margin: 8px;
    font-family: 'Dancing Script', cursive;
`;

const Name = styled.p`
    text-align: center;
    font-size: 24px;
    margin: 8px;
    font-family: 'Dancing Script', cursive;
`;

const ProfileCard = () => (
    <Card fadeIn={`${Math.random().toFixed(2)}s`}>
        <Image
            width="210px"
            height="220px"
            image={profilePicture}
            alt="Profile picture"
            placeholder="Profile picture"
        />
        <HR />
        <div>
            <Name>Nick Bansal</Name>
            <ProfileText>Junior Web Developer</ProfileText>
        </div>
    </Card>
);

export default ProfileCard;
