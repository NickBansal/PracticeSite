import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';

import Loading from '../../../../components/InlineLoader';

const Container = styled.div`
	background: lightgrey;
	width: 640px;
	height: 360px;
	margin: auto;
`;

const Playlist = () => {
	const [loading, setLoading] = useState(true);
	return (
		<Container>
			<Loading isLoading={loading} />
			<ReactPlayer
				onReady={() => setLoading(false)}
				playing={false}
				url="https://soundcloud.com/bansal321/sets/lockdown"
			/>
		</Container>
	);
};

export default Playlist;
