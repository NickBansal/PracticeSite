import React from 'react';
import styled from 'styled-components';
import nc from '../../../../assets/profile/nc.JPG';

const Profile = styled.div`
    width: 300px;
    height: 300px;
    background: white;
`;

const Image = styled.img`
width: 225px;
height: 150px;
border-radius: 50px;
`;

const ProfileInformation = () => (
    <Profile>
        <Image src={nc} alt="Me" />
    </Profile>
);


export default ProfileInformation;
