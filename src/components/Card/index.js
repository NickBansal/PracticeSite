import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const StyledCard = styled.div`
    height: 400px;
    width: 300px;
    background: white;
    border: 3px solid #00000040;
    border-radius: 16px;
    margin: 26px;
        display: inline-block;
    padding: 16px;
    animation: ${({ fadeIn }) => `${fadeIn} linear fade`};

    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Card = ({ fadeIn }) => <StyledCard fadeIn={fadeIn} aria-label="Display card" />;

Card.propTypes = {
  fadeIn: string.isRequired,
};

export default Card;
