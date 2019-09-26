import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import drums from '../../../assets/drumMachine/drums.JPG';
import { boxShadow } from '../../../assets/globalStyles/constants/index';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const DrumMachineCard = () => (
	<Card fadeIn="2.5s">
		<Card.Title>Drum Machine</Card.Title>
		<Card.Content>
			<Image
				width="100%"
				height="85%"
				image={drums}
				aria-label="Profile picture"
				placeholder="Profile picture"
			/>
		</Card.Content>
		<Card.Button onClick={() => console.log('true')}>
			{' '}
			Click to play
		</Card.Button>
	</Card>
);

export default DrumMachineCard;
