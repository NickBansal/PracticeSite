import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors, breakPoints } from '../../../../utils/globalStyles/constants';
import useInterval from '../../../../utils/hooks/useInterval';
import { gameBoard } from './utils';
// import pint from '../../../../assets/snake/pint.svg';

const Column = styled.div`
	display: inline-block;
`;

const Row = styled.div`
	width: 25px;
	height: 25px;
	background: ${({ snake }) => (snake ? colors.green : 'black')};

	@media (min-width: ${breakPoints.mobileMax}) {
		width: 40px;
		height: 40px;
	}
`;

const Container = styled.div`
	width: fit-content;
	margin: 0 auto;
	height: 375px;
	border: 5px solid ${colors.pink};

	@media (min-width: ${breakPoints.mobileMax}) {
		height: 600px;
	}
`;

const rowsLength = 15;
const grid = gameBoard(rowsLength);

const SnakeGame = () => {
	const [[x, y], setposition] = useState([7, 7]);

	useInterval(() => {}, 500);

	return (
		<Container>
			{grid.map((col, i) => (
				<Column key={String(i)}>
					{col.map((row, j) => (
						<Row key={String(j)} snake={x === i && y === j} />
					))}
				</Column>
			))}
		</Container>
	);
};

export default SnakeGame;
