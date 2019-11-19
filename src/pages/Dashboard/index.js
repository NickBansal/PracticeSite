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

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 10px;

	@media (min-width: ${breakPoints.mobileMax}) {
		padding: 20px;
	}
`;

const rand = ['1.0s', '1.5s', '2.0s', '2.5s', '3.0s', '3.5s'].sort(
	() => Math.random() - 0.5
);

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
				<ProfileCard rand={rand[0]} />
				<NewsFeedCard rand={rand[1]} />
				<LiveChatCard rand={rand[2]} />
				<DrumMachineCard rand={rand[3]} />
				<SnakeCard rand={rand[4]} />
				<TetrisCard rand={rand[5]} />
			</CardContainer>
		</BlurImageLoader>
	</>
);

export default App;
