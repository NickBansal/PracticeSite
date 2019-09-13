import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 10px;
    right: 16px;
    &:hover {
        cursor: pointer;
    }
`;

const Line = styled.div`
    height: 7px;
    width: 60px;
    margin: 12px;
    background: #0000008a;
    border-radius: 3px;
`;

const Hamburger = () => (
  <Container>
      <Line />
      <Line />
      <Line />
    </Container>
);

export default Hamburger;
