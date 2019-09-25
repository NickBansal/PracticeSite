import React from 'react';
import styled from 'styled-components';
import BlurImageLoader from '../../components/BlurImageLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';
import { GlobalStyle } from '../../assets/globalStyles';
import ProfileCard from './ProfileCard';
import NewsFeedCard from './NewsFeedCard';
import LiveChatCard from './LiveChatCard';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 20px;
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
			<CardContainer>
				<ProfileCard />
				<NewsFeedCard />
				<LiveChatCard />
			</CardContainer>
		</BlurImageLoader>
	</>
);

export default App;
