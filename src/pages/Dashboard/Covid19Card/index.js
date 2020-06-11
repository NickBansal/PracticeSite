import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import covid19 from '../../../assets/covid19/covid19.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import CovidContainer from './CovidContainer';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const Covid19Card = ({ rand }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn={rand}>
			<Card.Title>COVID 19 map</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={covid19}
					aria-label="Arcade card"
					placeholder="Arcade card"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<CovidContainer />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to view
			</Card.Button>
		</Card>
	);
};

export default Covid19Card;
