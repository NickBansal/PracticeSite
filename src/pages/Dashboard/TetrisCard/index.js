import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import BlurImageLoader from '../../../components/BlurImageLoader';
import tetris from '../../../assets/tetris/tetris.jpg';
import { boxShadow } from '../../../utils/globalStyles/constants/index';
import Overlay from '../../../components/Overlay';

const Image = styled(BlurImageLoader)`
	-webkit-box-shadow: ${boxShadow};
	-moz-box-shadow: ${boxShadow};
	box-shadow: ${boxShadow};
	border-radius: 10px;
`;

const TetrisCard = ({ rand }) => {
	const [showOverlay, setShowOverlay] = useState(false);
	return (
		<Card fadeIn={rand}>
			<Card.Title>Tetris</Card.Title>
			<Card.Content>
				<Image
					width="100%"
					height="85%"
					image={tetris}
					aria-label="Tetris game"
					placeholder="Tetris game"
				/>
			</Card.Content>
			<Overlay showOverlay={showOverlay} handleClick={setShowOverlay} />
			<Card.Button onClick={() => setShowOverlay(true)}>
				Click to play
			</Card.Button>
		</Card>
	);
};

export default TetrisCard;
