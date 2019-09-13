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

const NewsFeedCard = () => (
  <Card fadeIn="1.5s">
      <Title>News feed</Title>
      <HR />
      <Button onClick={() => console.log('hello')}>Find out more</Button>
    </Card>
);

export default NewsFeedCard;
