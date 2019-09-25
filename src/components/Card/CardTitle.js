import React from 'react';
import styled from 'styled-components';
import { HR } from '../../assets/globalStyles/index';
import { fontSize } from '../../assets/globalStyles/constants/index';

const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const CardTitle = ({ children }) => (
    <>
        <Title>{children}</Title>
        <HR />
    </>
);


export default CardTitle;