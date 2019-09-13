import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';

const Background = styled(LazyLoadImage)`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: grayscale(0.7);
`;

function App() {
  return (
    <Background
      alt="Ao Nang Beach"
      src={backgroundImage} // use normal <img> attributes as props
      effect="blur"
      delayMethod="debounce"
      delayTime={1000}
    />
  );
}

export default App;
