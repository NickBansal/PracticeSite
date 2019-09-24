import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';
import { spacing } from '../../../../assets/globalStyles/constants/index';

const LinksContainer = styled.div`
    width: 70px;
    height: 224px;
    position: absolute;
    top: 16px;
    right: 20px;
    opacity: ${({ showlinks }) => (showlinks ? '1' : '0')};
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

const Links = ({ showlinks }) => (
    <LinksContainer aria-label="Links icons" showlinks={showlinks}>
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
    </LinksContainer>
);

Links.propTypes = {
    showlinks: bool.isRequired,
};

export default Links;
