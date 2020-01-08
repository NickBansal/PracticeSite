import React, { useState } from 'react';
import styled from 'styled-components';
import Selections from './Selections';
import Game from './Game';

const Container = styled.div`
	width: 800px;
	height: 600px;
	display: flex;
`;

const Arena = () => {
	const [game, setGame] = useState('Snake');
	return (
		<Container>
			<Selections setGame={setGame} game={game} />
			<Game game={game} />
		</Container>
	);
};

export default Arena;
