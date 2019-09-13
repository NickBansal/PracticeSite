import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    height: 400px;
    width: 300px;
    background: white;
    border: 3px solid #00000040;
    border-radius: 16px;
    margin: 16px;
        display: inline-block;
    padding: 16px;
`;

const Card = () => <StyledCard />;

export default Card;
