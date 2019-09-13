import React from 'react';
import BlurImageLoader from '../../components/BlurImageLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';

const App = () => (
  <BlurImageLoader
    width="100%"
    height="100vh"
    image={backgroundImage}
    alt="Thailand picture"
    placeholder="Thailand picture"
  />
);

export default App;
