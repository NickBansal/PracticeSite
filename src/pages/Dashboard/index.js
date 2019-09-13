import React from 'react';
import BlurImageLoader from '../../components/BlurImageLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';
import GlobalStyle from '../../assets/globalStyles';
import Card from '../../components/Card';
import Navbar from '../../components/Navbar';

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
      <Card />
      <Card />
      <Card />
    </BlurImageLoader>
  </>
);

export default App;
