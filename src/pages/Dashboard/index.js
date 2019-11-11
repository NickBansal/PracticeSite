import React from 'react';
import styled from 'styled-components';
import BlurImageLoader from '../../components/BlurImageLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from '../../assets/dashboard/thailand.JPG';
import { GlobalStyle } from '../../utils/globalStyles';
import { breakPoints } from '../../utils/globalStyles/constants';
import ProfileCard from './ProfileCard';
import NewsFeedCard from './NewsFeedCard';
import LiveChatCard from './LiveChatCard';
import DrumMachineCard from './DrumMachineCard';
import SnakeCard from './SnakeCard';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 10px;

	@media (min-width: ${breakPoints.mobileMax}) {
		padding: 20px;
	}
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
				<DrumMachineCard />
				<SnakeCard />
			</CardContainer>
		</BlurImageLoader>
	</>
);

export default App;
