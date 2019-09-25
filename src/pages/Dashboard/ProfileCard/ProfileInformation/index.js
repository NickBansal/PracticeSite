import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
    position: absolute;
    width: 90%;
    height: 300px;
    background: white;
    z-index: 500;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 700px) {
        width: 650px;
    }

    .alert-enter & {
        opacity: 0;
        transform: scale(0.3), translate(-50%, -50%);
    }
    .alert-enter-active  &{
        opacity: 1;
        transform: translateX(0), translate(-50%, -50%);
        transition: opacity 500ms, transform 500ms;
    }
    .alert-exit & {
        opacity: 1;
    }
    .alert-exit-active & {
        opacity: 0;
        transform: scale(0.3), translate(-50%, -50%);
        transition: opacity 500ms, transform 500ms  
    }
`;

const ProfileInformation = () => <Profile />;


export default ProfileInformation;
