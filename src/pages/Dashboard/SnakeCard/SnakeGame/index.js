import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../utils/globalStyles/constants';

import { createEmptyGameBoard } from './utils';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: black;
`;

const Container = styled.div`
	width: fit-content;
	margin: 0 auto;
	height: 375px;
	border: 5px ${colors.pink} solid;
`;

const emptyBoard = createEmptyGameBoard(15, 15);

const SnakeGame = () => (
	<Container>
		{emptyBoard.map((col, i) => (
			<Column key={String(i)}>
				{col.map((row, j) => (
					<Row key={String(j)} onClick={() => console.log(i, j)} />
				))}
			</Column>
		))}
	</Container>
);

export default SnakeGame;
