import React, { useState } from 'react';
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

const Links = styled.div`
    width: 70px;
    height: 224px;
    position: absolute;
    top: 16px;
    right: 20px;
    opacity: ${({ show }) => (show ? '1' : '0')};
    padding: ${spacing.s2} 0;

    transition: opacity 0.3s ease-in;
`;

const LinkIcon = styled.div`
    display: block;
    height: 33.33%;
    text-align: center;
`;

const Icon = styled.i`
color: #ff3300;
`;

const ProfileCard = () => {
    const [showLinks, setShowLinks] = useState(false);

    return (
        <Card fadeIn="1.0s">
            <div
                onMouseEnter={() => setShowLinks(true)}
                onMouseLeave={() => setShowLinks(false)}
            >
                <Image
                    width="210px"
                    height="220px"
                    image={profilePicture}
                    alt="Profile picture"
                    placeholder="Profile picture"
                />
                <Links show={showLinks}>
                    <LinkIcon>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/in/nick-bansal-69059717a/"
                        >
                            <Icon className="i-link fab fa-linkedin fa-3x" />
                        </a>
                    </LinkIcon>
                    <LinkIcon>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/NickBansal"
                        >
                            <Icon className="i-link fab fa-github fa-3x" />
                        </a>
                    </LinkIcon>
                    <LinkIcon>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://codepen.io/NickyBee/"
                        >
                            <Icon className="i-link fab fa-codepen fa-3x" />
                        </a>
                    </LinkIcon>
                </Links>

            </div>
            <HR />

            <Name>Nick Bansal</Name>
            <ProfileText>Junior Web Developer</ProfileText>

            <Button onClick={() => { }}>View full profile</Button>
        </Card>
    );
};

export default ProfileCard;
