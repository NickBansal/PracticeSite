import React from 'react';
import ReactPlayer from 'react-player/lazy';

const Playlist = () => (
	<ReactPlayer
		playing={false}
		url="https://soundcloud.com/bansal321/sets/lockdown"
	/>
);

export default Playlist;
