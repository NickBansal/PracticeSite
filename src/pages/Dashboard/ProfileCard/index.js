import React, { useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import Card from '../../../components/Card';
import profilePicture from '../../../assets/profile/me.JPG';
import BlurImageLoader from '../../../components/BlurImageLoader';
import { HR } from '../../../assets/globalStyles/index';
import Button from '../../../components/Button';
import Links from './Links';
import { spacing, fontSize } from '../../../assets/globalStyles/constants/index';

import '../../../assets/globalStyles/styles.css';

const Image = styled(BlurImageLoader)`
    -webkit-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    -moz-box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    box-shadow: 4px 11px 55px -21px rgba(0,0,0,0.75);
    border-radius: 10px;
    margin-bottom: ${spacing.s2};
    border: 2px solid #00000030;
    opacity: ${({ mouseEnter }) => (mouseEnter ? '0.8' : '1')};
    transition: opacity 0.3s;

    &:hover {
        cursor: pointer;
    }
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

const ABC = styled.div`
    position: absolute;
    width: 300px;
    height: 300px;
    background: white;
    z-index: 500;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: #00000099;
    z-index: 400;
    position: fixed;
    top: 0;
    left: 0;
`;

const ProfileCard = () => {
    const [showLinks, setShowLinks] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <Card fadeIn="1.0s">
            <div
                aria-label="Profile picture and links"
                onMouseEnter={() => setShowLinks(true)}
                onMouseLeave={() => setShowLinks(false)}
            >
                <Image
                    width="210px"
                    height="220px"
                    image={profilePicture}
                    aria-label="Profile picture"
                    placeholder="Profile picture"
                    mouseEnter={showLinks}
                />
                <Links showlinks={showLinks} />
            </div>
            <HR />

            <CSSTransition
                in={showMessage}
                timeout={500}
                classNames="alert"
                unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
            >
                <Background>
                    <ABC>
                        <Button onClick={() => setShowMessage(false)}>
                            Close
                        </Button>

                    </ABC>

                </Background>

            </CSSTransition>

            <Name>Nick Bansal</Name>
            <ProfileText>Junior Web Developer</ProfileText>

            <Button onClick={() => setShowMessage(true)}>View full profile</Button>
        </Card>
    );
};

export default ProfileCard;
