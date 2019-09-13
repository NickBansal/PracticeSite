import React from 'react';
import styled from 'styled-components';
import BlurImageLoader from '../../components/BlurImageLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';
import GlobalStyle from '../../assets/globalStyles';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: scroll;
  padding: 50px;
`;

const App = () => (
  <>
    <GlobalStyle />
    <BlurImageLoader
      width="100%"
      height="100vh"
      image={backgroundImage}
      alt="Thailand picture"
      placeholder="Thailand picture"
    >
      <Navbar />
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </BlurImageLoader>
  </>
);

export default App;
