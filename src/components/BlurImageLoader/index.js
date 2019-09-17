import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const LoadableImage = styled.div`
    background-image: url(${({ src }) => src});
    filter: ${({ loaded }) => (!loaded ? 'blur(30px)' : 'none')};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    transition: filter 1s ease;
    background-position: 50% 50%;
    background-origin: border-box;
    background-size: cover;
    flex-shrink: 0;
    text-align:justify;
    overflow: scroll;
`;

const BlurImageLoader = ({
    placeholder, image, ...props
}) => {
    const runOnce = true;

    const [loadState, setLoadState] = useState({
        src: placeholder,
        loaded: false,
    });

    useEffect(() => {
        const img = new Image();

        img.onload = () => {
            setLoadState({
                src: img.src,
                loaded: true,
            });
        };

        img.src = image;
    // eslint-disable-next-line
  }, [runOnce]);

    return <LoadableImage {...props} {...loadState} />;
};

BlurImageLoader.propTypes = {
    placeholder: string.isRequired,
    image: string.isRequired,
};

export default BlurImageLoader;
