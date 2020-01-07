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
import TetrisCard from './TetrisCard';
import SpaceInvaders from './SpaceInvadersCard';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 10px;

	@media (min-width: ${breakPoints.mobileMax}) {
		padding: 20px;
	}
`;

const components = [
	ProfileCard,
	NewsFeedCard,
	LiveChatCard,
	DrumMachineCard,
	SnakeCard,
	TetrisCard,
	SpaceInvaders
];

const randomOrder = Array(components.length)
	.fill(null)
	.map((_, item) => 1 + item * 0.5)
	.sort(() => Math.random() - 0.5);

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
				{components.map((Component, index) => (
					<Component
						rand={`${randomOrder[index]}s`}
						key={String(Component)}
					/>
				))}
			</CardContainer>
		</BlurImageLoader>
	</>
);

export default App;
