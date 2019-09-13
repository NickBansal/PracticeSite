import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';
import { spacing } from '../../assets/globalStyles/constants/index';

const StyledCard = styled.div`
    height: 400px;
    width: 300px;
    background: white;
    border: 3px solid #00000040;
    border-radius: ${spacing.s2};
    margin: 26px;
        display: inline-block;
    padding: ${spacing.s2};
    animation: ${({ fadeIn }) => `${fadeIn} linear fade`};
    position: relative;
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Card = ({ fadeIn, children }) => <StyledCard fadeIn={fadeIn} aria-label="Display card">{children}</StyledCard>;

Card.propTypes = {
  fadeIn: string.isRequired,
  children: node.isRequired,
};

export default Card;
