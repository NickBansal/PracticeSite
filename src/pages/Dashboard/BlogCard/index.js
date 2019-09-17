import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Button from '../../../components/Button';
import { fontSize } from '../../../assets/globalStyles/constants/index';
import { HR } from '../../../assets/globalStyles/index';

const Title = styled.h1`
    font-size: ${fontSize.title};
    margin: 0;
`;

const BlogCard = () => (
    <Card fadeIn="2.0s">
        <Title>My blog</Title>
        <HR />
        <Button>See full blog</Button>
    </Card>
);

export default BlogCard;
