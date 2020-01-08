import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/globalStyles/constants';
import Selections from './Selections';

const Container = styled.div`
	width: 800px;
	height: 600px;
	display: flex;
`;

const Game = styled.div`
	height: 100%;
	border: 5px solid black;
	background: ${colors.yellow};
	width: 73%;
	border-left: 0;
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
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
