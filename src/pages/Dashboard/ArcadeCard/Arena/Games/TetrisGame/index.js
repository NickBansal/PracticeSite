import React from 'react';
import styled from 'styled-components';
// import { colors } from '../../../../../../utils/globalStyles/constants';

import Tetris from './Tetris';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: center;
`;

// const Canvas = styled.div`
// 	border: 5px solid ${colors.pink};
// 	height: 580px;
// 	width: 290px;
// 	background: black;
// `;

const TetrisGame = () => {
	return (
		<Container>
			<Tetris />
		</Container>
	);
};

export default TetrisGame;
