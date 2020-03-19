import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import AS from '../../../assets/alteredState/alteredState.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import Timeline from './Timeline';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const AlteredStateCard = ({ rand }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn={rand}>
			<Card.Title>Altered State</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={AS}
					aria-label="Profile picture"
					placeholder="Profile picture"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<Timeline />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click for timeline
			</Card.Button>
		</Card>
	);
};

export default AlteredStateCard;
