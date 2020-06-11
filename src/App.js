import React from 'react';
import styled from 'styled-components';
import 'react-lazy-load-image-component/src/effects/blur.css';
import backgroundImage from './assets/dashboard/thailand.JPG';
import { GlobalStyle } from './utils/globalStyles';
import { breakPoints } from './utils/globalStyles/constants';

import AllCards from './pages/Dashboard';

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	padding: 10px;

	@media (min-width: ${breakPoints.mobileMax}) {
		padding: 20px;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url(${backgroundImage});
	background-position: 50% 50%;
	background-size: cover;
	overflow: scroll;
`;

const randomOrder = Array(AllCards.length)
	.fill(null)
	.map((_, item) => 1 + item * 0.5)
	.sort(() => Math.random() - 0.5);

const App = () => (
	<Container>
		<GlobalStyle />
		<CardContainer>
			{AllCards.map((Component, index) => (
				<Component
					rand={`${randomOrder[index]}s`}
					key={String(Component)}
				/>
			))}
		</CardContainer>
	</Container>
);

export default App;
