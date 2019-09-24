import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR, LiveText } from '../../../assets/globalStyles/index';


const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const BlogCard = () => (
    <Card fadeIn="2.0s">
        <Title><LiveText>Live</LiveText> chat</Title>
        <HR />
        <Button onClick={() => { }}>Click to enter</Button>
    </Card>
);

export default BlogCard;
