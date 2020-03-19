import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const LoadableImage = styled.div.attrs(props => ({
	style: {
		width: `${props.width}`,
		height: `${props.height}`,
		backgroundImage: `url(${props.src})`
	}
}))`
	filter: ${({ loaded }) => (!loaded ? 'blur(30px)' : 'none')};
	transition: filter 1s ease;
	background-position: 50% 50%;
	background-size: cover;
	flex-shrink: 0;
	text-align: justify;
	overflow: scroll;
	display: inline-block;
`;

const BlurImageLoader = ({ placeholder, image, ...props }) => {
	const [loadState, setLoadState] = useState({
		src: placeholder,
		loaded: false
	});

	useEffect(() => {
		const img = new Image();

		img.onload = () => {
			setLoadState({
				src: img.src,
				loaded: true
			});
		};

		img.src = image;
		// eslint-disable-next-line
    }, []);

	return <LoadableImage {...props} {...loadState} />;
};

BlurImageLoader.propTypes = {
	placeholder: string.isRequired,
	image: string.isRequired
};

export default BlurImageLoader;
