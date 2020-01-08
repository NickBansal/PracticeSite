import React, { useState } from 'react';
import styled from 'styled-components';
import Selections from './Selections';
import Games from './Games';

const Container = styled.div`
	width: 800px;
	height: 590px;
	display: flex;
`;

const Arena = () => {
	const [game, setGame] = useState('Snake');
	return (
		<Container>
			<Selections setGame={setGame} game={game} />
			<Games game={game} />
		</Container>
	);
};

export default Arena;
