import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/globalStyles/constants';

const Container = styled.div`
	width: 800px;
	height: 600px;
`;

const Selection = styled.div`
	display: inline-block;
	height: 100%;
	width: 25%;
	border: 5px solid black;
	background: ${colors.yellow};
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
`;

const Game = styled.div`
	display: inline-block;
	height: 100%;
	width: 73%;
	border: 5px solid black;
	border-left: 0;
	background: ${colors.yellow};
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
`;

const Arena = () => (
	<Container>
		<Selection />
		<Game />
	</Container>
);

export default Arena;
