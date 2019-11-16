import React from 'react';
import styled from 'styled-components';

import { createEmptyGameBoard } from './utils';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 20px;
	height: 20px;
	background: white;
`;

const Container = styled.div`
	text-align: center;
	width: 550px;
	margin: 0 auto;
`;

const SnakeGame = () => (
	<Container>
		{createEmptyGameBoard(9).map(col => (
			<Column>
				{col.map(row => (
					<Row>{row}</Row>
				))}
			</Column>
		))}
	</Container>
);

export default SnakeGame;
