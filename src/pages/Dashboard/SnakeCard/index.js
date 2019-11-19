import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import snake from '../../../assets/snake/snake.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';
import SnakeGame from './SnakeGame';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const SnakeCard = () => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn="3.0s">
			<Card.Title>Snake</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={snake}
					aria-label="Snake game"
					placeholder="Snake game"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay}>
				<SnakeGame />
			</Overlay>
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to play
			</Card.Button>
		</Card>
	);
};

export default SnakeCard;
